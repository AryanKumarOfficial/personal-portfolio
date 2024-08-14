import {create} from "zustand";
import {devtools, createJSONStorage} from "zustand/middleware";
import {persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {AppwriteException, ID, Models} from "appwrite";
import {account} from "@/backend/app/client/config";
import {users} from "@/backend/app/server/config";

export interface UserPreference {
    role: string;
}

interface IAuthStore {
    session: Models.Session | null;
    token: string | null;
    user: Models.User<UserPreference> | null;
    hydrated: boolean | null;

    setHydrated(): void;

    verifySession(): Promise<void>;

    login(
        email: string,
        password: string
    ): Promise<{
        success: boolean,
        error?: AppwriteException | null;
    }>;

    createAccount(
        name: string,
        email: string,
        password: string
    ): Promise<{
        success: boolean,
        error?: AppwriteException | null;
    }>;

    logout(): void;

    verifyEmail(
        userId: string,
        secret: string
    ): Promise<{
        success: boolean,
        error?: AppwriteException | null
    }>;

    createEmailVerification(): Promise<{
        success: boolean,
        error?: AppwriteException | null
    }>;

    getUserRole(): Promise<string | null>;
}


const useAuth = create<IAuthStore>()(
    devtools(
        persist(immer((set, get) => ({
            session: null,
            token: null,
            user: null,
            hydrated: null,

            setHydrated() {
                set({
                    hydrated: true
                });
            },
            async verifySession() {
                try {
                    const session = await account.getSession("current");
                    set({
                        session: session,
                    });
                } catch (error) {
                    console.log("Failed to verify session: ", error);
                    set({session: null});
                }
            },
            async login(email: string, password: string) {
                try {
                    // first try to delete existing user session from the server
                    await account.deleteSessions();
                } catch (error) {
                    console.log("Failed to delete existing sessions: ", error)
                }
                try {
                    const session = await account.createEmailPasswordSession(email, password);
                    const [user, {jwt}] = await Promise.all([
                        account.get<UserPreference>(),
                        account.createJWT()
                    ]);
                    if (!user.prefs?.role) {
                        await account.updatePrefs<UserPreference>({role: "user"});
                    }
                    set({session, user, token: jwt});
                    return {
                        success: true,
                    };
                } catch (error) {
                    console.log("Failed to login: ", error);
                    return {
                        success: false,
                        error: error instanceof AppwriteException ? error : null,
                    };
                }
            },
            async createAccount(name: string, email: string, password: string) {
                try {
                    const user = await account.create(ID.unique(), email, password, name);
                    await users.updateLabels(user.$id, ['subscriber']);
                    await get().createEmailVerification();

                    return {
                        success: true,
                    };
                } catch (error) {
                    console.log("Failed to create account: ", error);
                    return {
                        success: false,
                        error: error instanceof AppwriteException ? error : null,
                    };
                }
            },
            async logout() {
                try {
                    await account.deleteSessions();
                    set({session: null, user: null, token: null});
                } catch (error) {
                    console.log("Logout failed: ", error);
                }
            },
            async verifyEmail(userId: string, secret: string) {
                try {
                    new URLSearchParams();
                    console.log(userId, secret, " tokens")
                    const res = await account.updateVerification(userId, secret);
                    console.log(res, " res after verification")
                    return {
                        success: true
                    }
                } catch (error) {
                    console.log("Error verifying error: ", error);
                    return {
                        success: false,
                        error: error instanceof AppwriteException ? error : null
                    }
                }
            },
            async createEmailVerification() {
                try {
                    await account.createVerification("http://localhost:3000/admin/verify")
                    return {
                        success: true
                    }
                } catch (error) {
                    console.log("error sending verification email: ", error)
                    return {
                        success: false,
                        error: error instanceof AppwriteException ? error : null
                    }
                }
            },
            async getUserRole() {
                try {
                    const user = await account.get();
                    return user.labels[0] || null;
                } catch (error) {
                    console.log("Failed to get user role")
                    return null;
                }
            }
        })), {
            name: "auth-storage",
            onRehydrateStorage() {
                return (state) => {
                    state?.setHydrated();
                };
            },
            storage: createJSONStorage(() => localStorage),
        })
    ))
;

export default useAuth;

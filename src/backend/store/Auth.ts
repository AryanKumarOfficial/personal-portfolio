import {create} from "zustand";
import {devtools, createJSONStorage} from "zustand/middleware";
import {persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {AppwriteException, ID, Models} from "appwrite";
import {account} from "@/backend/app/client/config";

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
}


const useAuth = create<IAuthStore>()(
    devtools(
        persist(immer((set) => ({
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
                    await account.create(ID.unique(), email, password, name);
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
        })), {
            name: "auth-storage",
            onRehydrateStorage() {
                return (state) => {
                    state?.setHydrated();
                };
            },
            storage: createJSONStorage(() => sessionStorage),
        })
    ))
;

export default useAuth;

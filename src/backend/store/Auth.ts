import {create} from "zustand";
import {devtools, createJSONStorage} from "zustand/middleware";
import {persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import env from "@/config/config";
import {generateSecretTokens} from "@/helpers/generators";

interface IAuthStore {
    token: string | null;
    user: {
        name: string,
        email: string,
        isAdmin: boolean,
        isVerified: boolean,
    } | null;
    role: string | null;
    hydrated: boolean | null;

    setHydrated(): void;

    login(
        email: string,
        password: string
    ): Promise<{
        success: boolean,
        error?: Error | null;
    }>;

    createAccount(
        name: string,
        email: string,
        password: string
    ): Promise<{
        success: boolean,
        error?: Error | null;
    }>;

    logout(): void;

    verifyEmail(
        userId: string,
        secret: string
    ): Promise<{
        success: boolean,
        error?: Error | null
    }>;

    createEmailVerification(
        email: string,
    ): Promise<{
        success: boolean,
        error?: Error | null
    }>;

    getUserRole(
        email: string
    ): Promise<string | null>;
}


const useAuth = create<IAuthStore>()(
    devtools(
        persist(immer((set, get) => ({
            token: null,
            role: null,
            user: null,
            hydrated: null,

            setHydrated() {
                set({
                    hydrated: true
                });
            },
            async createEmailVerification(email: string) {
                try {
                    const secret: string = generateSecretTokens();
                    const response = await fetch(`${env.site.url as string}/admin/sendVerify/api`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({email, secret})

                    });

                    const data = await response.json();
                    if (!data.success) {
                        return {
                            success: false,
                            error: new Error(data.message)
                        }
                    }
                    return {
                        success: true,
                        error: null
                    }
                } catch (error: any) {
                    console.log("error sending verification email: ", error)
                    return {
                        success: false,
                        error: new Error(error.message)
                    }
                }
            },
            async login(email: string, password: string) {
                try {
                    const response = await fetch(`${env.site.url as string}/admin/login/api`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({email, password})
                    });

                    const data = await response.json();
                    if (!data.success) {
                        return {
                            success: false,
                            error: new Error(data.message)
                        }
                    }

                    set({
                        user: data?.admin,
                        token: data?.token
                    });

                    await get().getUserRole(email);

                    return {
                        success: true,
                        error: null
                    }


                } catch (e) {
                    console.log("Error logging in: ", e);
                    return {
                        success: false,
                        error: e instanceof Error ? e : null,
                    };
                }
            },
            async createAccount(name: string, email: string, password: string) {
                try {
                    const response = await fetch(`${env.site.url as string}/admin/signup/api`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({name, email, password})
                    });

                    const data = await response.json();
                    if (!data.success) {
                        return {
                            success: false,
                            error: new Error(data.message)
                        }
                    }
                    await get().createEmailVerification(email);
                    return {
                        success: true,
                        error: null
                    };
                } catch (error) {
                    console.log("Failed to create account: ", error);
                    return {
                        success: false,
                        error: new Error("Internal Server Error")
                    };
                }
            },
            async logout() {
                try {
                    set({user: null, token: null});
                } catch (error) {
                    console.log("Logout failed: ", error);
                }
            },
            async verifyEmail(email: string, secret: string) {
                try {
                    const response = await fetch(`${env.site.url as string}/admin/verify/api`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({email, secret})
                    });

                    const data = await response.json();
                    if (!data.success) {
                        return {
                            success: false,
                            error: new Error(data.message)
                        }
                    }

                    set({
                        user: {
                            name: email,
                            email: email,
                            isAdmin: false,
                            isVerified: true
                        }
                    })

                    return {
                        success: true,
                        error: null
                    }
                } catch (error) {
                    console.log("Error verifying error: ", error);
                    return {
                        success: false,
                        error: new Error("Failed to verify email"),
                    }
                }
            },
            async getUserRole(email: string) {
                try {
                    const res = await fetch(`${env.site.url as string}/admin/api`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({email})
                    })
                    const data = await res.json();
                    if (!data.success) {
                        set({role: "guest"});
                        return data?.role || null;
                    }
                    set({role: data?.role});
                    return data?.role || null;
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

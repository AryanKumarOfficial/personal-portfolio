import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

interface IUser {
    name: string;
    email: string;
    isAdmin: boolean;
}

interface IAuthStore {
    token: string;
    user: IUser;
    verifySession: () => Promise<void>;
    createAccount: (name: string, email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const authStore = (set: any, get: any) => ({
    token: '',
    user: {
        name: '',
        email: '',
        isAdmin: false,
    },
    verifySession: async () => {
        // verify the session
    },
    createAccount: async (name: string, email: string, password: string) => {
        // create an account
    },
    login: async (email: string, password: string) => {
        // create the account
    },
    logout: async () => {
        // logout logic
    }
});

const useAuthStore = create<IAuthStore>()(devtools(persist(immer(authStore), {name: 'auth-store'})));

export default useAuthStore;

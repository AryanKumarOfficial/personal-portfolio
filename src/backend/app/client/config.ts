import {Account, ID, Client} from "appwrite";
import env from "@/config/config"

interface CreateUserAccount {
    name: string;
    email: string;
    password: string;
}

interface LoginUserAccount {
    email: string;
    password: string;
}


const appwriteClient = new Client();
appwriteClient
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId);

export const account = new Account(appwriteClient);

export class AppwriteServices {
    async createUserAccount({name, email, password}: CreateUserAccount) {
        try {
            console.log(env.appwrite.endpoint, env.appwrite.projectId, "env");
            const userAccount = await account.create(
                ID.unique(),
                email,
                password,
                name
            );

            console.log("Account created:", userAccount);

            return this.login({email, password});
        } catch (error: any) {
            console.log(env.appwrite.endpoint, env.appwrite.projectId, "env");
            console.error("Error creating account:", error.message || error);
            throw new Error(error.message || "Failed to create account");
        }
    }

    async login({email, password}: LoginUserAccount) {
        try {
            const session = await account.createEmailPasswordSession(email, password);
            console.log("User logged in:", session);
            return session;
        } catch (error: any) {
            console.error("Error logging in:", error.message || error);
            throw new Error(error.message || "Failed to log in");
        }
    }

    async isLoggedIn(): Promise<boolean> {
        try {
            const user = await this.getCurrentUser();
            return Boolean(user);
        } catch (error: any) {
            console.error("Error checking login status:", error.message || error);
            return false;
        }
    }

    async getCurrentUser() {
        try {
            const user = await account.get();
            console.log("Current user:", user);
            return user;
        } catch (error: any) {
            console.error("Error getting user:", error.message || error);
            throw new Error(error.message || "Failed to get current user");
        }
    }

    async logout() {
        try {
            await account.deleteSession("current");
            console.log("User logged out");
        } catch (error: any) {
            console.error("Error logging out:", error.message || error);
            throw new Error(error.message || "Failed to log out");
        }
    }
}

const appwriteServices = new AppwriteServices();

export default appwriteServices;

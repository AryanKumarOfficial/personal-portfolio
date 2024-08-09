import env from "@/env";
import { Account, ID, Client } from "appwrite";

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
  async createUserAccount({ name, email, password }: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error: any) {
      console.error(error);
    }
  }

  async login({ email, password }: LoginUserAccount) {
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error: any) {
      console.error(error);
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error: any) {
      console.error(error);
      return false;
    }
  }

  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error: any) {
      console.error("Error getting user", error);
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error: any) {
      console.error("Error logging out", error);
    }
  }
}

const appwriteServices = new AppwriteServices();

export default appwriteServices;

import { Avatars, Client, Databases, Storage, Users } from "node-appwrite";
import env from "@/env";

const client = new Client();

client
  .setEndpoint(env.appwrite.endpoint)
  .setProject(env.appwrite.projectId)
  .setKey(env.appwrite.apiKey);

const databases = new Databases(client);
const avatar = new Avatars(client);
const users = new Users(client);
const storage = new Storage(client);

export { client, databases, avatar, users ,storage};

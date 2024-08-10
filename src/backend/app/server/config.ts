import {Avatars, Client, Databases, Storage, Users} from "node-appwrite";
import config from "@/config/config";

const client = new Client();

client
    .setEndpoint(config.appwrite.endpoint)
    .setProject(config.appwrite.projectId)
    .setKey(config.appwrite.apiKey);

const databases = new Databases(client);
const avatar = new Avatars(client);
const users = new Users(client);
const storage = new Storage(client);

export {client, databases, users, storage,avatar};

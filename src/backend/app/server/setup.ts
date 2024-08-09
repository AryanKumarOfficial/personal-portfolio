import { DB } from "../name";
import createBlogCollection from "./blogCollection";
import { databases } from "./config";

export default async function getOrCreateDatabase() {
  try {
    await databases.get(DB);
    console.log("database connected");
  } catch (error) {
    try {
      await databases.create(DB, DB);
      console.log("database created");
      console.log("database connected");
      Promise.all([await createBlogCollection()]);
      console.log("collection created");
      console.log("database connected");
    } catch (error) {
      console.error("Error creating database", error);
    }
  }
  return databases;
}

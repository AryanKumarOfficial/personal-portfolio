import { Permission, IndexType } from "node-appwrite";
import { blogsCollection, DB } from "../name";
import { databases } from "./config";

export default async function createBlogCollection() {
  // create collection
  await databases.createCollection(DB, blogsCollection, blogsCollection, [
    Permission.create("users"),
    Permission.read("any"),
    Permission.read("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);
  console.log("====================================");
  console.log("Blog Collection Created");
  console.log("====================================");

  // create attributes

  await Promise.all([
    databases.createStringAttribute(DB, blogsCollection, "title", 500, true),
    databases.createStringAttribute(
      DB,
      blogsCollection,
      "content",
      10000,
      true
    ),
    databases.createStringAttribute(DB, blogsCollection, "authorId", 50, true),
    // create a attributes for tags act as array of string
  ]);
  console.log("blog attributes created");
}

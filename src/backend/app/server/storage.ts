import { Permission } from "node-appwrite";
import { blogsAttachmentBucket } from "../name";
import { storage } from "./config";

export default async function getOrCreateStorage() {
  try {
    await storage.getBucket(blogsAttachmentBucket);
    console.log("storage connected");
  } catch (error) {
    try {
      await storage.createBucket(
        blogsAttachmentBucket,
        blogsAttachmentBucket,
        [
          Permission.create("users"),
          Permission.read("users"),
          Permission.read("any"),
          Permission.update("users"),
          Permission.delete("users"),
        ],
        false,
        undefined,
        undefined,
        ["jpg", "jpeg", "png", "gif", "webp", "svg", "heic"]
      );
      console.log("storage created");
      console.log("storage connected");
    } catch (error) {
      console.error("storage error", error);
    }
  }
}

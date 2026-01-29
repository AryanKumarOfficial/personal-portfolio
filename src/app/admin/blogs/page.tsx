import { BlogService } from "@/modules/blog/service";
import { createPostAction } from "@/modules/blog/actions";
import { Post } from "@/.generated/prisma/client";

export default async function BlogsPage() {
  const posts: Post[] = await BlogService.getPosts(undefined);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Blog Posts</h2>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Create New Post</h3>
        <form action={createPostAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              name="title"
              type="text"
              required
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="Post Title"
            />
          </div>
          <div>
             <label className="block text-sm font-medium mb-1">Excerpt</label>
             <textarea
                name="excerpt"
                rows={2}
                className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                placeholder="Brief summary..."
             />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Content (Markdown)</label>
            <textarea
              name="content"
              required
              rows={6}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="# Markdown content here..."
            />
          </div>
          <div>
              <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
              <input
              name="tags"
              type="text"
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="Tech, Life, Coding"
              />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
          >
            Publish Post
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow border-l-4 border-green-500">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.slug}</p>
              </div>
              <span className={`px-2 py-1 text-xs rounded ${post.status === 'PUBLISHED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {post.status}
              </span>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300 line-clamp-2">{post.excerpt || post.content.substring(0, 100)}</p>
            <div className="mt-4 text-xs text-gray-400">
                Created: {new Date(post.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

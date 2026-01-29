import { BlogService } from "@/modules/blog/service";
import { createPostAction, publishPostAction, deletePostAction } from "@/modules/blog/actions";
import { Post } from "@/.generated/prisma/client";
import Link from 'next/link';

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
            Create Draft
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

            {(post.aiSummary || (post.aiTags && post.aiTags.length > 0)) && (
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-100 dark:border-green-900">
                <h4 className="text-xs font-bold text-green-700 dark:text-green-300 flex items-center gap-2">
                  ✨ AI Analysis
                </h4>
                {post.aiSummary && <p className="text-sm mt-1 italic">{post.aiSummary}</p>}
                {post.aiTags && post.aiTags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.aiTags.map((t: string) => (
                      <span key={t} className="text-xs bg-green-200 dark:bg-green-800 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-gray-400">
                    Created: {new Date(post.createdAt).toLocaleDateString()}
                </div>
                <div className="flex gap-2">
                     <Link
                        href={`/admin/blogs/${post.id}`}
                        className="text-sm text-blue-600 hover:text-blue-800 underline"
                      >
                        Edit
                      </Link>

                    {post.status !== 'PUBLISHED' && (
                        <form action={publishPostAction}>
                            <input type="hidden" name="id" value={post.id} />
                            <button type="submit" className="text-sm text-green-600 hover:text-green-800 underline">
                                Publish
                            </button>
                        </form>
                    )}

                    <form action={deletePostAction}>
                        <input type="hidden" name="id" value={post.id} />
                        <button type="submit" className="text-sm text-red-600 hover:text-red-800 underline">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

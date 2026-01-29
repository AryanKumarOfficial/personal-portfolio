import { BlogService } from "@/modules/blog/service";
import { updatePostAction } from "@/modules/blog/actions";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await BlogService.getPostById(id);

  if (!post) {
    notFound();
  }

  const updatePostWithId = updatePostAction.bind(null, post.id);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Edit Post</h2>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <form action={updatePostWithId} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              name="title"
              type="text"
              required
              defaultValue={post.title}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
             <label className="block text-sm font-medium mb-1">Excerpt</label>
             <textarea
                name="excerpt"
                rows={2}
                defaultValue={post.excerpt || ''}
                className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
             />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Content (Markdown)</label>
            <textarea
              name="content"
              required
              rows={12}
              defaultValue={post.content}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
              <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
              <input
              name="tags"
              type="text"
              defaultValue={post.tags.join(', ')}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
          </div>
          <div className="flex justify-end gap-2">
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
            >
                Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

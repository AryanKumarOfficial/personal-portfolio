import { PortfolioService } from "@/modules/portfolio/service";
import { updateProjectAction } from "@/modules/portfolio/actions";
import { notFound } from "next/navigation";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await PortfolioService.getProjectById(id);

  if (!project) {
    notFound();
  }

  const updateProjectWithId = updateProjectAction.bind(null, project.id);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Edit Project</h2>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <form action={updateProjectWithId} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Project Title</label>
            <input
              name="title"
              type="text"
              required
              defaultValue={project.title}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              required
              defaultValue={project.description || ''}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium mb-1">GitHub URL</label>
                <input
                name="githubUrl"
                type="url"
                defaultValue={project.githubUrl || ''}
                className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
            </div>
             <div>
                <label className="block text-sm font-medium mb-1">Live URL</label>
                <input
                name="liveUrl"
                type="url"
                defaultValue={project.liveUrl || ''}
                className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
            </div>
          </div>
          <div>
                <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
                <input
                name="tags"
                type="text"
                defaultValue={project.tags.join(', ')}
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

import { PortfolioService } from "@/modules/portfolio/service";
import { createProjectAction } from "@/modules/portfolio/actions";
import { Project } from "@prisma/client";

export default async function ProjectsPage() {
  // Show all projects (DRAFT and PUBLISHED) in Admin
  const projects: Project[] = await PortfolioService.getProjects(undefined);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Projects</h2>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Create New Project</h3>
        <form action={createProjectAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Project Title</label>
            <input
              name="title"
              type="text"
              required
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="e.g. My Awesome SaaS"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              required
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="Describe the project..."
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium mb-1">GitHub URL</label>
                <input
                name="githubUrl"
                type="url"
                className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                placeholder="https://github.com/..."
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
                <input
                name="tags"
                type="text"
                className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                placeholder="React, Next.js, AI"
                />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
          >
            Create Project & Trigger AI
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((project: Project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.slug}</p>
              </div>
              <span className={`px-2 py-1 text-xs rounded ${project.status === 'PUBLISHED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {project.status}
              </span>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>

            {/* AI Section */}
            {(project.aiSummary || project.aiTechStack.length > 0) && (
              <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-100 dark:border-purple-900">
                <h4 className="text-xs font-bold text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  ✨ AI Analysis
                </h4>
                {project.aiSummary && <p className="text-sm mt-1 italic">{project.aiSummary}</p>}
                {project.aiTechStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.aiTechStack.map((t: string) => (
                      <span key={t} className="text-xs bg-purple-200 dark:bg-purple-800 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="mt-4 text-xs text-gray-400">
                Created: {new Date(project.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

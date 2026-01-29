import db from '@/lib/db';

export default async function DashboardPage() {
    const projectsCount = await db.project.count();
    const postsCount = await db.post.count();
    const skillsCount = await db.skill.count();
    const clientsCount = await db.client.count();

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border-l-4 border-blue-500">
                    <h3 className="text-gray-500 text-sm font-medium">Projects</h3>
                    <p className="text-3xl font-bold mt-2">{projectsCount}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border-l-4 border-green-500">
                    <h3 className="text-gray-500 text-sm font-medium">Blog Posts</h3>
                    <p className="text-3xl font-bold mt-2">{postsCount}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border-l-4 border-purple-500">
                    <h3 className="text-gray-500 text-sm font-medium">Skills</h3>
                    <p className="text-3xl font-bold mt-2">{skillsCount}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border-l-4 border-orange-500">
                    <h3 className="text-gray-500 text-sm font-medium">Clients</h3>
                    <p className="text-3xl font-bold mt-2">{clientsCount}</p>
                </div>
            </div>
        </div>
    )
}

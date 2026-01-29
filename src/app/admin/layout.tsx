import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, FolderKanban, FileText, Briefcase, Users, Settings } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">Admin Panel</h1>
          <p className="text-xs text-gray-500">Portfolio Manager</p>
        </div>
        <nav className="mt-6 px-6 space-y-2">
          <Link href="/admin/dashboard" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded dark:text-gray-300 dark:hover:bg-gray-700">
             <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded dark:text-gray-300 dark:hover:bg-gray-700">
             <FolderKanban size={18} /> Projects
          </Link>
          <Link href="/admin/blogs" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded dark:text-gray-300 dark:hover:bg-gray-700">
             <FileText size={18} /> Blog Posts
          </Link>
          <Link href="/admin/resume" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded dark:text-gray-300 dark:hover:bg-gray-700">
             <Briefcase size={18} /> Resume & Skills
          </Link>
          <Link href="/admin/clients" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded dark:text-gray-300 dark:hover:bg-gray-700">
             <Users size={18} /> Clients
          </Link>
          <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
             <Link href="/admin/settings" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded dark:text-gray-300 dark:hover:bg-gray-700">
                <Settings size={18} /> Settings
             </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}

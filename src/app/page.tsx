import Link from "next/link";
import { PortfolioService } from "@/modules/portfolio/service";
import { ArrowRight, Github, Code, ExternalLink, Mail, Layout, Star, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { Project } from "@/.generated/prisma/client";

// Make the page dynamic to avoid static build failure when DB is missing
export const dynamic = 'force-dynamic';

export default async function Home() {
    let projects: Project[] = [];
    try {
        projects = await PortfolioService.getProjects("PUBLISHED");
    } catch (error) {
        console.error("Failed to fetch projects (DB might be offline during build):", error);
        // In production, this would mean the page renders without projects
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                    <div className="font-bold text-xl flex items-center gap-2">
                        <Layout className="w-6 h-6 text-blue-600"/>
                        <span>Aryan Kumar</span>
                    </div>
                    <div className="flex gap-4">
                        <Link href="https://github.com/AryanKumarOfficial" target="_blank"
                              className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                            <Github className="w-5 h-5 text-slate-600"/>
                        </Link>
                        <Link href="/api/auth/signin"
                              className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded hover:bg-slate-800 transition-colors">
                            Admin Login
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
                        <Star className="w-4 h-4 fill-blue-700"/>
                        <span>Full-Stack Engineer & AI Architect</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Building the next generation of <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise AI</span> solutions.
                    </h1>

                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        I transform complex requirements into scalable, event-driven platforms.
                        Specializing in Next.js, Cloud Architecture, and Generative AI.
                    </p>

                    <div className="pt-8 flex justify-center gap-4">
                        <Link href="#projects"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                            View Projects <ArrowRight className="w-4 h-4"/>
                        </Link>
                        <Link href="mailto:aryanak9163@gmail.com"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-all">
                            Contact Me <Mail className="w-4 h-4"/>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Stats Section */}
            <section className="border-y border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        {label: "Years Experience", value: "3+"},
                        {label: "Projects Shipped", value: "20+"},
                        {label: "Tech Stack", value: "Modern"},
                        {label: "Availability", value: "Open"},
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                            <div
                                className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <main id="projects" className="max-w-7xl mx-auto px-6 py-24">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
                        <p className="text-slate-500 mt-2">A selection of my recent technical work.</p>
                    </div>
                    <Link href="https://github.com/AryanKumarOfficial"
                          className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1">
                        View all on GitHub <ArrowRight className="w-4 h-4"/>
                    </Link>
                </div>

                {projects.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                        <Code className="w-12 h-12 text-slate-300 mx-auto mb-4"/>
                        <h3 className="text-lg font-semibold text-slate-900">No Published Projects</h3>
                        <p className="text-slate-500">Check back soon for updates.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id}
                                 className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col overflow-hidden">
                                <div className="p-8 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-blue-50 rounded-xl">
                                            <Layout className="w-6 h-6 text-blue-600"/>
                                        </div>
                                        <div className="flex gap-2">
                                            {project.liveUrl && (
                                                <a href={project.liveUrl} target="_blank"
                                                   className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                                    <ExternalLink className="w-5 h-5"/>
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} target="_blank"
                                                   className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
                                                    <Github className="w-5 h-5"/>
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {project.aiSummary && (
                                        <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Star className="w-3 h-3 fill-indigo-500 text-indigo-500"/>
                                                <span
                                                    className="text-xs font-bold text-indigo-900 uppercase tracking-wider">AI Insight</span>
                                            </div>
                                            <p className="text-xs text-slate-600 leading-relaxed italic">
                                                &quot;{project.aiSummary}&quot;
                                            </p>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                        <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-500">
                            +{project.tags.length - 4}
                        </span>
                    )}
                  </div>
                </div>

                <div className="px-8 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs font-medium text-slate-500">
                    <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-blue-600">
                        Read Case Study <ArrowUpRight className="w-3 h-3" />
                    </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <div className="font-bold text-xl text-white flex items-center gap-2 mb-4">
                    <Layout className="w-6 h-6 text-blue-500" />
                    <span>Aryan Kumar</span>
                </div>
                <p className="max-w-xs text-sm">
                    Crafting digital experiences with code and creativity.
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
            <div className="flex justify-start md:justify-end gap-6">
                 <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                 <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                 <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
                 <Link href="/api/auth/signin" className="hover:text-white transition-colors">Admin</Link>
            </div>
        </div>
      </footer>
    </div>
  );
}

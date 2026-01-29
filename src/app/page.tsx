import Link from "next/link";
import { PortfolioService } from "@/modules/portfolio/service";
import { BlogService } from "@/modules/blog/service";
import { ResumeService } from "@/modules/resume/service";
import { ArrowRight, Github, Code, ExternalLink, Mail, Layout, Star } from "lucide-react";
import { Project, Post, Skill } from "@/.generated/prisma/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Make the page dynamic to avoid static build failure when DB is missing
export const dynamic = 'force-dynamic';

export default async function Home() {
    let projects: Project[] = [];
    let posts: Post[] = [];
    let skills: Skill[] = [];

    try {
        projects = (await PortfolioService.getProjects("PUBLISHED")).slice(0, 3);
        posts = (await BlogService.getPosts("PUBLISHED")).slice(0, 3);
        skills = await ResumeService.getSkills();
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
            <Navbar />

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
                        <Star className="w-4 h-4 fill-blue-700"/>
                        <span>Full-Stack Engineer & AI Architect</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Building the next generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise AI</span> solutions.
                    </h1>

                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        I transform complex requirements into scalable, event-driven platforms.
                        Specializing in Next.js, Cloud Architecture, and Generative AI.
                    </p>

                    <div className="pt-8 flex justify-center gap-4">
                        <Link href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                            View Projects <ArrowRight className="w-4 h-4"/>
                        </Link>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-all">
                            Contact Me <Mail className="w-4 h-4"/>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Skills Marquee (Simplified as flex wrap for now) */}
             <section className="border-y border-slate-200 bg-white py-8 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Technologies I Work With</p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                         {/* Icons would go here, using text for now if icons not available in DB */}
                         {skills.slice(0, 10).map((skill: any) => (
                             <span key={skill.id} className="text-lg font-bold text-slate-600">{skill.name}</span>
                         ))}
                         {skills.length === 0 && (
                            <>
                                <span className="text-lg font-bold text-slate-600">React</span>
                                <span className="text-lg font-bold text-slate-600">Next.js</span>
                                <span className="text-lg font-bold text-slate-600">TypeScript</span>
                                <span className="text-lg font-bold text-slate-600">Node.js</span>
                                <span className="text-lg font-bold text-slate-600">PostgreSQL</span>
                                <span className="text-lg font-bold text-slate-600">AWS</span>
                            </>
                         )}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
                        <p className="text-slate-500 mt-2">A selection of my recent technical work.</p>
                    </div>
                    {/* Link to portfolio if it existed, for now linking to github or #projects */}
                    <Link href="/#projects" className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1">
                        View all projects <ArrowRight className="w-4 h-4"/>
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
                            <div key={project.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col overflow-hidden">
                                <div className="p-8 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-blue-50 rounded-xl">
                                            <Layout className="w-6 h-6 text-blue-600"/>
                                        </div>
                                        <div className="flex gap-2">
                                            {project.liveUrl && (
                                                <a href={project.liveUrl} target="_blank" className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                                    <ExternalLink className="w-5 h-5"/>
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} target="_blank" className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
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
                                                <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider">AI Insight</span>
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

             {/* Latest Blogs */}
             <section className="bg-slate-50 py-24 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
                            <p className="text-slate-500 mt-2">Thoughts on technology and software engineering.</p>
                        </div>
                        <Link href="/blogs" className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1">
                            Read all articles <ArrowRight className="w-4 h-4"/>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map(post => (
                             <Link key={post.id} href={`/blogs/${post.slug}`} className="block bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-200">
                                <div className="text-sm text-slate-500 mb-2">{new Date(post.publishedAt || post.createdAt).toLocaleDateString()}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">{post.title}</h3>
                                <p className="text-slate-600 text-sm line-clamp-3">{post.excerpt}</p>
                                <div className="mt-4 text-blue-600 text-sm font-medium flex items-center gap-1">
                                    Read more <ArrowRight className="w-3 h-3" />
                                </div>
                             </Link>
                        ))}
                    </div>
                </div>
             </section>

            <Footer />
        </div>
    );
}

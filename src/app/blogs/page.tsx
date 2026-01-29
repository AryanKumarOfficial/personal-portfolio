import { BlogService } from "@/modules/blog/service";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Post } from "@/.generated/prisma/client";

export const dynamic = 'force-dynamic';

export default async function BlogsPage() {
  let posts: Post[] = [];
  try {
    posts = await BlogService.getPosts("PUBLISHED");
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
             <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Thoughts & Insights</h1>
             <p className="text-lg text-slate-600">Exploring the latest in tech, development, and design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <Link key={post.id} href={`/blogs/${post.slug}`} className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden">
                    <div className="aspect-video bg-slate-100 relative">
                        {post.coverImage ? (
                            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-300 font-bold text-4xl bg-slate-50">
                                {post.title[0]}
                            </div>
                        )}
                    </div>
                    <div className="p-8">
                        <div className="flex gap-2 mb-4">
                            {post.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {post.title}
                        </h2>
                        <p className="text-slate-600 text-sm line-clamp-3 mb-6">
                            {post.excerpt || post.content.substring(0, 150) + "..."}
                        </p>
                        <div className="flex items-center justify-between text-xs font-medium text-slate-500 border-t border-slate-100 pt-4">
                            <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString()}</span>
                            <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-blue-600">
                                Read Article <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

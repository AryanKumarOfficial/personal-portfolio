import { BlogService } from "@/modules/blog/service";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await BlogService.getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>

        <header className="mb-10 space-y-6">
            <div className="flex gap-2">
                 {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wide">
                        {tag}
                    </span>
                ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString(undefined, { dateStyle: 'long' })}</span>
                <span>•</span>
                <span>{post.author?.name || 'Aryan Kumar'}</span>
            </div>
        </header>

        {post.coverImage && (
            <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
                <img src={post.coverImage} alt={post.title} className="w-full h-auto" />
            </div>
        )}

        <article className="prose prose-lg prose-slate max-w-none">
            <div className="whitespace-pre-wrap">{post.content}</div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

import Link from "next/link";
import { Layout, Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
            <Link href="/" className="font-bold text-xl flex items-center gap-2">
                <Layout className="w-6 h-6 text-blue-600"/>
                <span>Aryan Kumar</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
                 <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
                 <Link href="/#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Portfolio</Link>
                 <Link href="/blogs" className="text-slate-600 hover:text-blue-600 transition-colors">Blogs</Link>
                 <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
            <div className="flex gap-4 items-center">
                <Link href="https://github.com/AryanKumarOfficial" target="_blank"
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <Github className="w-5 h-5 text-slate-600"/>
                </Link>
                <Link href="/api/auth/signin" className="hidden md:block px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded hover:bg-slate-800 transition-colors">
                    Admin
                </Link>
            </div>
        </div>
    </nav>
  );
}

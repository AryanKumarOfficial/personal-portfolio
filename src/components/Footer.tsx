import Link from "next/link";
import { Layout } from "lucide-react";

export default function Footer() {
  return (
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
                 <Link href="https://github.com/AryanKumarOfficial" className="hover:text-white transition-colors">GitHub</Link>
                 <Link href="/api/auth/signin" className="hover:text-white transition-colors">Admin</Link>
            </div>
        </div>
      </footer>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Get in Touch</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Have a project in mind or just want to say hi? I&apos;m always open to discussing new ideas and opportunities.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                        <Link href="mailto:aryank9163@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                            <div className="p-2 bg-slate-100 rounded-full"><Mail className="w-5 h-5" /></div>
                            aryank9163@gmail.com
                        </Link>
                         <Link href="https://github.com/AryanKumarOfficial" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                            <div className="p-2 bg-slate-100 rounded-full"><Github className="w-5 h-5" /></div>
                            AryanKumarOfficial
                        </Link>
                         <Link href="#" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                            <div className="p-2 bg-slate-100 rounded-full"><Linkedin className="w-5 h-5" /></div>
                            Aryan Kumar
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" rows={4} placeholder="How can I help you?" />
                    </div>
                    <button type="button" className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

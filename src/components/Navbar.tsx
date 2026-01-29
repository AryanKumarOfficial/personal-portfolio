"use client";

import Link from "next/link";
import { Layout, Github, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
            <Link href="/" className="font-bold text-xl flex items-center gap-2">
                <Layout className="w-6 h-6 text-blue-600"/>
                <span>Aryan Kumar</span>
            </Link>
            
            {/* Desktop Navigation */}
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
                
                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="md:hidden p-2 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Toggle mobile menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-slate-600" />
                  ) : (
                    <Menu className="w-6 h-6 text-slate-600" />
                  )}
                </button>
            </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
              <Link 
                href="/about" 
                className="text-slate-600 hover:text-blue-600 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/#projects" 
                className="text-slate-600 hover:text-blue-600 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
              <Link 
                href="/blogs" 
                className="text-slate-600 hover:text-blue-600 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Blogs
              </Link>
              <Link 
                href="/contact" 
                className="text-slate-600 hover:text-blue-600 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <Link 
                href="/api/auth/signin" 
                className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded hover:bg-slate-800 transition-colors text-center"
                onClick={closeMobileMenu}
              >
                Admin
              </Link>
            </div>
          </div>
        )}
    </nav>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Icon from "@/app/admin/components/Icon";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type NavLink = {
  name: string;
  href: string;
  icon: string;
};

const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
    icon: "fas fa-home"
  },
  {
    name: "About",
    href: "/about",
    icon: "fas fa-user"
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: "fas fa-briefcase"
  },
  {
    name: "Blogs",
    href: "/blogs",
    icon: "fas fa-blog"
  },
  {
    name: "Contact",
    href: "/contact",
    icon: "fas fa-envelope"
  }
];

const NavLink = ({ link, active }: { link: NavLink; active: boolean }) => {
  return (
    <Link href={link.href}>
      <div
        className={cn(
          "relative group px-4 py-2 transition-all duration-300 ease-out rounded-lg",
          active 
            ? "text-blue-400 bg-blue-500/5" 
            : "text-gray-300 hover:text-blue-400 hover:bg-blue-500/5"
        )}
      >
        <div className="relative z-10 flex items-center gap-2 font-medium">
          <span className="relative">
            <Icon className={`${link.icon} text-lg`} />
            {active && (
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full" />
            )}
          </span>
          <span>{link.name}</span>
        </div>
        
        {/* Animated underline */}
        <span 
          className={cn(
            "absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-teal-400 rounded-full transition-all duration-300 ease-out",
            active ? "w-full" : "w-0 group-hover:w-full"
          )} 
        />
      </div>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div 
      className={cn(
        "fixed w-full z-50 backdrop-blur-lg border-b transition-all duration-300",
        scrolled 
          ? "bg-black/60 border-white/10 py-2" 
          : "bg-black/20 border-transparent py-4"
      )}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl md:text-3xl transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Aryan Kumar
            </h1>
            <div className="mt-1">
              <Badge 
                variant="outline" 
                className="text-xs bg-gradient-to-r from-blue-900/50 to-black/60 text-gray-300 border-blue-500/40 backdrop-blur-md"
              >
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent font-medium">
                  Developer
                </span>
              </Badge>
            </div>
          </div>
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1 bg-gray-900/50 backdrop-blur-sm rounded-full border border-white/5 p-1 shadow-2xl">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              link={link} 
              active={isActive(link.href)} 
            />
          ))}
        </div>

        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="outline" 
              size="icon" 
              className="text-white border-white/10 bg-gray-900/50 backdrop-blur-md hover:bg-white/10 hover:border-white/20"
            >
              <Icon className="fas fa-bars text-xl" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[250px] sm:w-[300px] bg-gradient-to-b from-gray-900 to-black border-l border-white/10 p-0"
          >
            <div className="h-full flex flex-col">
              <div className="p-6 border-b border-white/10">
                <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Aryan Kumar
                </h2>
                <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
              </div>
              
              <div className="flex-1 overflow-auto py-6 px-4">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                    >
                      <div
                        className={cn(
                          "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200",
                          isActive(link.href) 
                            ? "bg-gradient-to-r from-blue-900/30 to-blue-700/10 text-blue-400 border-l-2 border-blue-400 pl-3" 
                            : "hover:bg-white/5 text-gray-300 hover:text-blue-400"
                        )}
                      >
                        <Icon className={`${link.icon} text-lg`} />
                        <span>{link.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto p-6 border-t border-white/10">
                <div className="flex justify-center space-x-4">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Icon className="fab fa-github text-xl" />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Icon className="fab fa-linkedin text-xl" />
                  </a>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Icon className="fab fa-twitter text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;

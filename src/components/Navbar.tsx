"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Icon from "@/app/admin/components/Icon";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { TextShimmer } from "@/components/ui/aceternity/text-shimmer";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
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
      <Button 
        variant="ghost" 
        size="lg" 
        className={cn(
          "relative group px-4 py-2 transition-all duration-300 ease-in-out",
          active ? "text-teal-400" : "text-gray-300 hover:text-teal-400"
        )}
      >
        <div className="relative z-10 flex items-center gap-2">
          <Icon className={`${link.icon} text-lg`} />
          <span>{link.name}</span>
        </div>
        {active && (
          <span className="absolute bottom-0 left-0 h-[2px] w-full bg-teal-400 rounded-full" />
        )}
      </Button>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [currentPath, setCurrentPath] = useState("");
  
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <Spotlight className="fixed w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-4 md:px-8">
        <Link href="/" className="relative group">
          <TextShimmer className="font-bold text-2xl md:text-3xl transition-all duration-300 transform group-hover:scale-105">
            Aryan Kumar
          </TextShimmer>
          <Badge variant="outline" className="absolute -bottom-1 left-0 text-xs bg-black/50 text-gray-300 border-teal-500/40">
            Developer
          </Badge>
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1">
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
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Icon className="fas fa-bars text-xl" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] sm:w-[300px] bg-gray-900 border-r border-white/10">
            <div className="flex flex-col space-y-2 mt-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200",
                    isActive(link.href) 
                      ? "bg-white/10 text-teal-400" 
                      : "text-gray-300 hover:bg-white/5 hover:text-teal-400"
                  )}
                >
                  <Icon className={`${link.icon} text-lg`} />
                  <span>{link.name}</span>
                  {isActive(link.href) && (
                    <span className="ml-auto">
                      <Icon className="fas fa-circle text-[6px] text-teal-400" />
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Spotlight>
  );
};

export default Navbar;

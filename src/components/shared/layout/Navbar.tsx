"use client";
import Github from "@/assets/icons/Github";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ThemeToggle from "./ThemeToggle";
interface NavItem {
  href: string;
  label: string;
}

const items: NavItem[] = [
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Nabar: React.FC = () => {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/50 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="flex flex-col tracking-tight">
          <span className="font-semibold text-lg hover:text-primary transition">
            Aryan Kumar
          </span>
          <span className="text-[10px] font-mono text-primary">
            Available for internships
          </span>
        </Link>

        {/* Desktop  Navigation */}

        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {items.length > 0 &&
                items.map((item, idx) => (
                  <NavigationMenuItem key={idx}>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "transition",
                          pathname === item.href ? "text-primary" : "",
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="h-6 w-px bg-border" />
          <Button variant={"outline"} size={"sm"} asChild>
            <a
              href="https://github.com/aryankumarofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              Github
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm flex flex-col p-0"
            >
              <SheetHeader className="px-6 py-5 border-b">
                <SheetTitle className="font-semibold text-lg">
                  Aryan Kumar
                </SheetTitle>
                <SheetDescription className="text-sm mt-1">
                  Full-Stack Deceloper
                </SheetDescription>
                <span className="text-xs text-primary font-mono mt-2 block">
                  Available for internships
                </span>
              </SheetHeader>
              <nav className="flex flex-col px-3 py-4">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-3 rounded-lg text-base font-medium transition",
                      pathname === item.href
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex-1" />
              <div className="px-6 pb-6 pt-4 border-t">
                <Button
                  variant={"outline"}
                  className="w-full h-11 text-base"
                  asChild
                >
                  <a
                    href="https://github.com/aryankumarofficial"
                    target="_blank"
                  >
                    <Github />
                    Github
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Nabar;

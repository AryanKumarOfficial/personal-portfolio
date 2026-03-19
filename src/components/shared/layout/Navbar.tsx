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
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "motion/react";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { HeroData } from "@/lib/data/profile";

interface NavItem {
  href: string;
  label: string;
}

const items: NavItem[] = [
  { href: "/#home", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();

  /*
  ACTIVE LINK STATE
  */
  const [activeHash, setActiveHash] = useState("#home");

  /*
  NAVBAR VISIBILITY STATE
  */
  const [visible, setVisible] = useState(true);

  /*
  SPRING PROGRESS BAR
  */
  const progress = useSpring(scrollYProgress);

  /*
  NAVBAR SHRINK
  */
  const height = useTransform(scrollY, [0, 80], [72, 56]);

  const blur = useTransform(scrollY, [0, 80], ["blur(6px)", "blur(16px)"]);

  /*
  SHOW / HIDE NAVBAR ON SCROLL
  */
  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious();

    if (!prev) return;

    /*
    always show at top
    */
    if (current < 80) {
      setVisible(true);
      return;
    }

    /*
    scroll down: hide
    */
    if (current > prev && current > 120) {
      setVisible(false);
    }

    /*
    scroll up: show
    */
    if (current < prev) {
      setVisible(true);
    }
  });

  /*
  HASH CHANGE
  */
  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "#home");
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  /*
  SCROLL SECTION DETECTION
  */
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 120) {
      setActiveHash("#home");
      return;
    }

    let current = "#home";

    for (const item of items) {
      const hashOnly = item.href.split("#")[1];
      const el = document.getElementById(hashOnly);

      if (!el) continue;

      const rect = el.getBoundingClientRect();

      if (
        rect.top <= window.innerHeight * 0.35 &&
        rect.bottom >= window.innerHeight * 0.35
      ) {
        current = `#${hashOnly}`;
      }
    }

    setActiveHash(current);
  });

  return (
    <>
      {/* progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary origin-left z-60"
      />

      {/* navbar */}
      <motion.header
        animate={{
          y: visible ? 0 : -100,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        style={{
          height,
          backdropFilter: blur,
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/60"
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          {/* logo */}
          <Link href="/#home" scroll={false} className="flex flex-col">
            <span className="font-semibold text-lg">{HeroData.name}</span>

            <span className="text-[10px] font-mono text-primary">
              {HeroData.availability}
            </span>
          </Link>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                {items.map((item) => {
                  const hashOnly = `#${item.href.split("#")[1]}`;
                  const active = activeHash === hashOnly;
                  return (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={item.href} className="relative px-3 py-1.5">
                          {item.label}

                          {active && (
                            <motion.div
                              layoutId="nav-indicator"
                              className="absolute inset-0 rounded-md bg-primary/10 border border-primary/30"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                            />
                          )}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="h-6 w-px bg-border" />

            <Button variant="outline" size="sm" asChild>
              <a href={HeroData.social.github} target="_blank">
                <Github />
                Github
              </a>
            </Button>
          </div>

          <ThemeToggle />

          {/* mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <SheetTitle>{HeroData.name}</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col mt-6">
                  {items.map((item) => {
                    const hashOnly = `#${item.href.split("#")[1]}`;
                    const active = activeHash === hashOnly;
                    return (
                      <SheetClose key={item.href} asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "px-4 py-3 rounded-lg",
                            active
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground",
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </>
  );
}

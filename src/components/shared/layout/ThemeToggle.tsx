"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export default function ThemeToggle() {
  const mounted = useMounted();
  const { setTheme, resolvedTheme } = useTheme();

  if (!mounted) {
    return <Button variant="ghost" size="icon" aria-label="Toggle Theme" />;
  }

  const isDark = resolvedTheme === "dark";
  return (
    <div
      className="
          relative flex items-center
          w-14 h-7.5
          rounded-full
          bg-muted
          cursor-pointer
          transition-colors
        "
      onClick={() => setTheme(isDark ? "light" : "dark")}
      role="button"
      aria-label="Toggle theme"
    >
      {/* sliding circle */}
      <div
        className={cn(
          `
            absolute
            w-6
            h-6
            rounded-full
            bg-background
            shadow-sm
            flex items-center justify-center
            transition-all duration-300
            `,
          isDark ? "translate-x-7" : "translate-x-1",
        )}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5" />
        ) : (
          <Sun className="w-3.5 h-3.5" />
        )}
      </div>
    </div>
  );
}

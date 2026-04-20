"use client";
import { Toaster } from "@/components/ui/sonner";
import { useTheme } from "next-themes";
import { ToasterProps } from "sonner";

export default function ThemeAwareToast() {
  const { resolvedTheme } = useTheme();
  return (
    <Toaster
      position="top-right"
      duration={3000}
      richColors
      closeButton
      theme={resolvedTheme as ToasterProps["theme"]}
    />
  );
}

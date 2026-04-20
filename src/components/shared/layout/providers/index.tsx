import React from "react";
import ThemeProvider from "./ThemProvider";
import MotionLayout from "./MotionLayout";
import { Toaster } from "@/components/ui/sonner";

export default function Providers({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <React.Fragment>
      <MotionLayout>
        <ThemeProvider>
          <Toaster />
          {children}
        </ThemeProvider>
      </MotionLayout>
    </React.Fragment>
  );
}

import React from "react";
import ThemeProvider from "./ThemProvider";
import MotionLayout from "./MotionLayout";
import ThemeAwareToast from "./ThemeAwareToast";

export default function Providers({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <React.Fragment>
      <MotionLayout>
        <ThemeProvider>
          <ThemeAwareToast />
          {children}
        </ThemeProvider>
      </MotionLayout>
    </React.Fragment>
  );
}

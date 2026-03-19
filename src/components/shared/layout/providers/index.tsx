import React from "react";
import ThemeProvider from "./ThemProvider";
import MotionLayout from "./MotionLayout";

export default function Providers({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <React.Fragment>
      <MotionLayout>
        <ThemeProvider>{children}</ThemeProvider>
      </MotionLayout>
    </React.Fragment>
  );
}

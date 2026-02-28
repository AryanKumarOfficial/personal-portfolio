import React from "react";
import ThemeProvider from "./ThemProvider";

export default function Providers({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}

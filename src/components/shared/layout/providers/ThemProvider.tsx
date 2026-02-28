import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from "next-themes";

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider attribute={"class"} enableSystem defaultTheme="system">
      {children}
    </NextThemeProvider>
  );
}

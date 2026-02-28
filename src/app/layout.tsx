import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/shared/layout/providers";
import Navbar from "@/components/shared/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aryan Kumar | Full Stack Engineer",
    template: "%s | Aryan Kumar",
  },
  description:
    "Aryan Kumar is a Full Stack Engineer specializing in Next.js, PostgreSQL, and scalable SaaS applications. View projects, skills, and experience.",
  keywords: [
    "Aryan Kumar",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Aryan Kumar" }],
  creator: "Aryan Kumar",

  openGraph: {
    title: "Aryan Kumar | Full Stack Engineer",
    description:
      "Full Stack Engineer building scalable web applications using Next.js and modern technologies.",
    url: "https://yourdomain.com",
    siteName: "Aryan Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aryan Kumar | Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in Next.js and scalable SaaS platforms.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

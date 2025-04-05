import React from "react";
import "./globals.css"
import Head from "next/head";
import Script from "next/script";
import { Metadata } from "next";
import { headers } from "next/headers";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
    title: {
        default: "Aryan Kumar | Full-Stack Developer & UI/UX Designer",
        template: "%s | Aryan Kumar - Portfolio",
    },
    description: "Aryan Kumar is a Full-Stack Developer and UI/UX Designer specializing in building modern web applications with React, Next.js, and other cutting-edge technologies.",
    metadataBase: new URL('https://www.aryankumarofficial.tech'),
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.aryankumarofficial.tech',
        title: 'Aryan Kumar | Full-Stack Developer & UI/UX Designer',
        description: 'Aryan Kumar is a Full-Stack Developer and UI/UX Designer specializing in building modern web applications with React, Next.js, and other cutting-edge technologies.',
        siteName: 'Aryan Kumar Portfolio',
        images: [
            {
                url: '/assets/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Aryan Kumar - Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aryan Kumar | Full-Stack Developer & UI/UX Designer',
        description: 'Aryan Kumar is a Full-Stack Developer and UI/UX Designer specializing in building modern web applications.',
        images: ['/assets/images/og-image.jpg'],
        creator: '@aryankumardev',
    },
    alternates: {
        canonical: 'https://www.aryankumarofficial.tech',
    },
    verification: {
        google: 'jUxKK5RnkDthnwx_wzFQndhkbfd7X8doSNOrJ9_pXKA',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* Google verification already handled in metadata */}
            <Head>
                <link rel="stylesheet" type='text/css'
                    href={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"} />

            </Head>
            <Script src={"https://kit.fontawesome.com/248f39001f.js"} crossOrigin="anonymous"></Script>
            <Script data-name="BMC-Widget" data-cfasync="false"
                src={"https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"} data-id="Aryankumarofficial"
                data-description="Support me on Buy me a coffee!" data-message="Buy me a coffee"
                data-color="#5F7FFF"
                data-position="Right" data-x_margin="18" data-y_margin="18" />
            <ClerkProvider>
                {children}
            </ClerkProvider>
        </html>
    );
}

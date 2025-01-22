import React from "react";
import "./globals.css"
import Head from "next/head";
import Script from "next/script";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: {
        default: "Aryankumarofficial",
        template: "%s | Aryankumarofficial",
    },
    description: "Aryankumarofficial's Portfolio",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Head>
            <meta name="google-site-verification" content="jUxKK5RnkDthnwx_wzFQndhkbfd7X8doSNOrJ9_pXKA"/>
            <Script src={"https://kit.fontawesome.com/248f39001f.js"} crossOrigin="anonymous"></Script>
            <link rel="stylesheet" type='text/css'
                  href={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"}/>

            <Script data-name="BMC-Widget" data-cfasync="false"
                    src={"https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"} data-id="Aryankumarofficial"
                    data-description="Support me on Buy me a coffee!" data-message="Buy me a coffee"
                    data-color="#5F7FFF"
                    data-position="Right" data-x_margin="18" data-y_margin="18"/>
        </Head>
        {children}
        </html>
    );
}

import React from "react";
import "./globals.css"

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <script src={"https://kit.fontawesome.com/248f39001f.js"} crossOrigin="anonymous"></script>
            <link rel="stylesheet" type='text/css'
                  href={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"}/>

            <title>AryanKumarOfficial</title>
        </head>
        {children}
        </html>
    );
}

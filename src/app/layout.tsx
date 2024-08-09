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
            <title>AryanKumarOfficial</title>
        </head>
        {children}
        </html>
    );
}

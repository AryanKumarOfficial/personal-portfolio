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
            <script data-name="BMC-Widget" data-cfasync="false"
                    src={"https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"} data-id="Aryankumarofficial"
                    data-description="Support me on Buy me a coffee!" data-message="Buy me a coffee"
                    data-color="#5F7FFF"
                    data-position="Right" data-x_margin="18" data-y_margin="18"/>
        </head>
        {children}
        </html>
    );
}

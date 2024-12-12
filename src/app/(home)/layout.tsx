import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import Navbar from "@/components/Navbar";
import React from "react";
import {Toaster} from "react-hot-toast";
import Footer from "@/components/Footer";
import SleekLoadingBar from "@/components/LoadingBar";

export const metadata: Metadata = {
    title: "Aryan Kumar | Portfolio",
    description: "Aryan Kumar's Portfolio",
};

const roboto = Roboto({
    display: "swap",
    weight: ["400"],
    style: "normal",
    subsets: ["latin"],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body className={`${roboto.className}`}>
        <Navbar/>
        <SleekLoadingBar/>
        <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                className: "",
                style: {
                    background: "#363636",
                    color: "#fff",
                    zIndex: 1,
                },
                duration: 5000,
            }}/>
        {children}
        <Footer/>
        </body>
    )
        ;
}

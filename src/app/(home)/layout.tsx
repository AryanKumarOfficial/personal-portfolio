import type {Metadata, ResolvingMetadata} from "next";
import {Roboto} from "next/font/google";
import Navbar from "@/components/Navbar";
import React from "react";
import {Toaster} from "react-hot-toast";
import Footer from "@/components/Footer";
import SleekLoadingBar from "@/components/LoadingBar";
import {headers} from "next/headers";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({searchParams}: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const Capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const headerLists = headers();
    const title = Capitalize(headerLists.get("x-current-path")?.split("/")?.join('') || "") || "Home";
    return {
        title,
        description: "Home page",
    };
}


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

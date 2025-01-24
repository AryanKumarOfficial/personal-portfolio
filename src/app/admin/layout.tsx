import React from "react";
import Sidebar from "./components/Sidebar";
import {Metadata} from "next";
import {headers} from "next/headers";
import {Protect} from "@clerk/nextjs";
import Unauthorized from "next/dist/client/components/unauthorized-error";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    const Capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const headerLists = await headers();
    const title = Capitalize(headerLists.get("x-current-path")?.split("/admin")?.join("").split("/").join("") || "") || "Admin"
    return {
        title,
        description: "Admin panel",
    };
}

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <body>
        <Protect fallback={<>
            <Unauthorized/>
            <div className="text-center absolute top-[55%] left-1/2 -translate-x-1/2">
                <Link href={"/"} legacyBehavior>
                    <a className="text-blue-500">Go to Home</a>
                </Link>
            </div>
        </>}>
            <Sidebar>
                {children}
            </Sidebar>
        </Protect>
        </body>
    );
};

export default AdminLayout;

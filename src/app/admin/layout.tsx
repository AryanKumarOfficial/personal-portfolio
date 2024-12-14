import React from "react";
import Sidebar from "./components/Sidebar";
import {Metadata} from "next";
import {headers} from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
    const Capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const headerLists = headers();
    const title = Capitalize(headerLists.get("x-current-path")?.split("/admin")?.join("").split("/").join("") || "") || "Admin"
    return {
        title,
        description: "Admin panel",
    };
}

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <body>
        <Sidebar>
            {children}
        </Sidebar>
        </body>
    );
};

export default AdminLayout;

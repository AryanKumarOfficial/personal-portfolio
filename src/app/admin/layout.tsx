import React from "react";
import Sidebar from "./components/Sidebar";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Aryankumarofficial | Admin Panel",
    description: "Aryankumarofficial's Admin Panel",
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

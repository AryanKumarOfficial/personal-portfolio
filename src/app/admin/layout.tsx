import React from "react";
import Sidebar from "./components/Sidebar";

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

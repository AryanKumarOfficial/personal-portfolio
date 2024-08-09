import React from "react";
import Sidebar from "./components/Sidebar";
import {Toaster} from "react-hot-toast";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <body>
        <Sidebar/>
        <Toaster
            position={'top-right'}
            reverseOrder={false}
            toastOptions={{
                className: '',
                style: {
                    background: '#111827',
                    color: '#2dd4bf',
                    zIndex: 1,
                },
                duration: 5000,
                success: {
                    style: {
                        background: '#10B981',
                        color: '#fff',
                    },
                },

            }}
        />
        {children}
        </body>
    );
};

export default AdminLayout;

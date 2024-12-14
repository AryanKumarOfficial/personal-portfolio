"use client";

import React, {useState, useEffect} from "react";
import useAuth from "@/backend/store/Auth";
import {useRouter} from "next/navigation";
import HomeForm from "@/components/settings/HomeForm";

// Define the types for the sections, form data, about data, and other structures

interface FormData {
    title: string;
    bio: string;
}


const SettingsPage: React.FC = () => {
    const {token, user, role} = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (!token) {
            router.push("/admin/login");
        } else if (token && user && !role?.includes("admin")) {
            router.push("/admin/unauthorized");
        }
    }, [token, role, user]);


    return (
        <HomeForm/>
    );
};

export default SettingsPage;

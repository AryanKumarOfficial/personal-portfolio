"use client";
import React, {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import useAuth from "@/backend/store/Auth";
import toast from "react-hot-toast";

export default function EmailVerification() {
    const {session, createEmailVerification, verifyEmail} = useAuth();
    const [userData, setUserData] = useState({
        userId: "",
        secret: ""
    })
    const router = useRouter();
    const searchParams = useSearchParams();
    const [initial, setInitial] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const secret = searchParams.get("secret");
        const userId = searchParams.get("userId");
        if (secret && userId) {
            setInitial(false);
            setUserData({
                secret: secret,
                userId: userId
            })
        }
    }, []);

    const handleVerify = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            await verifyEmail(userData.userId, userData.secret);
            toast.success("Verification completed!");
            setTimeout(() => {
                router.push("/admin/login");
            }, 3000);
        } catch (error) {
            console.error("Verification error:", error);
            toast.error("Failed to verify");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createEmailVerification();
            toast.success("Verification email sent!");
        } catch (error: any) {
            console.error("Error sending verification email:", error);
            toast.error(error.message || "Failed to send verification email");
        } finally {
            setLoading(false);
        }
    };

    if (!session) {
        return <div>Redirecting to login...</div>;
    }

    if (initial) {
        return (
            <section className="bg-gray-800 flex flex-col gap-10 justify-center items-center p-10 text-teal-400">
                <h1 className="text-rose-500 text-xl font-bold">
                    Invalid Verification URL!
                </h1>
                <button
                    onClick={handleSubmit}
                    type="button"
                    className="bg-teal-500 p-4 text-gray-50 text-lg font-semibold rounded transition-shadow duration-500 hover:shadow-md shadow-amber-300"
                    disabled={loading}
                >
                    {loading ? "Sending Email..." : "Resend Email"}
                </button>
            </section>
        );
    } else {
        return (
            <section>
                <button
                    onClick={handleVerify}
                    type="button"
                    className="bg-teal-500 p-4 text-gray-50 text-lg font-semibold rounded transition-shadow duration-500 hover:shadow-md shadow-amber-300"
                    disabled={loading}
                >
                    {loading ? "Verifying Email..." : "Verify Email"}
                </button>
            </section>
        );
    }
}
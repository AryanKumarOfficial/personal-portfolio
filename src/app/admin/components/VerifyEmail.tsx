"use client";
import React, {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import useAuth from "@/backend/store/Auth";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Verify, verify} from '@/backend/schema/Verify'


export default function EmailVerification() {
    const {register, reset, handleSubmit, formState: {errors}} = useForm<Verify>({
        resolver: zodResolver(verify)
    });
    const {createEmailVerification, verifyEmail, token} = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [initial, setInitial] = useState(true);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (token) {
            router.push("/admin");
        }
    }, [token]);

    useEffect(() => {
        if (searchParams.has("email") && searchParams.has("secret")) {
            setInitial(false);
        }
    }, [searchParams]);


    const handleVerify = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            verifyEmail(searchParams.get("email") ?? "", searchParams.get("secret") ?? "").then((res) => {
                if (res.success) {
                    toast.success("Verification completed!");
                    setTimeout(() => {
                        router.push("/admin/login");
                    }, 3000);
                } else {
                    toast.error(String(res.error?.message) || "Failed to verify");
                    setInitial(true);
                }
            });
        } catch (error) {
            console.error("Verification error:", error);
            toast.error("Failed to verify");
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async (data: Verify) => {
        setLoading(true);
        try {
            await createEmailVerification(data.email);
            toast.success("Verification email sent!");
        } catch (error: any) {
            console.error("Error sending verification email:", error);
            toast.error(error.message || "Failed to send verification email");
        } finally {
            setLoading(false);
        }
    };

    if (initial) {
        return (
            <section className="bg-gray-800 flex flex-col gap-10 justify-center items-center p-10 text-teal-400">
                <h1 className="text-rose-500 text-xl font-bold">
                    Invalid Verification URL!
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-4 bg-gray-700 text-gray-50 text-lg font-semibold rounded w-full"
                        {...register("email")}
                    />
                    <button
                        type="button"
                        className="bg-teal-500 p-4 text-gray-50 text-lg font-semibold rounded transition-shadow duration-500 hover:shadow-md shadow-amber-300 w-full text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-50"
                        disabled={loading}>
                        {loading ? "Sending Email..." : "Resend Email"}
                    </button>
                </form>
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
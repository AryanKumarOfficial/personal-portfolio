"use client";

import React, {useEffect} from "react";
import toast from "react-hot-toast";
import useAuth from "@/backend/store/Auth";
import {useRouter} from "next/navigation";
import Link from "next/link";


export default function LoginPage() {
    const {login, session} = useAuth();
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState(false);
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        // Check if passwords match
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (!formData.email || !formData.password) {
                toast.error("All fields are required");
                return;
            }

            const userData = await login(formData.email, formData.password);

            if (!userData.success) {
                toast.error(userData.error!.message);
            } else {
                toast.success("Account Created Successfully!")
                router.push("/admin");
            }

        } catch (error) {
            console.log(error, "error creating user")
        } finally {
            setLoading(false)
        }


    }

    const togglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    useEffect(() => {
        if (session) {
            router.push("/admin");
        }
    }, [session]);

    return (
        <section className="flex w-1/3 bg-gray-900 justify-center items-center text-teal-400 pt-28">
            <form onSubmit={handleSubmit} className="bg-gray-800 w-full rounded-lg shadow-lg px-10 py-6">
                <h1 className={'uppercase text-3xl font-bold text-center'}>Login</h1>

                <div className={"flex flex-col justify-center items-start gap-4 my-4"}>
                    <label htmlFor={"email"} className={"font-bold uppercase cursor-pointer"}>
                        Email
                    </label>
                    <input
                        type={"email"}
                        name={"email"}
                        id={"email"}
                        className={"bg-gray-700 w-full rounded outline-none p-2"}
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className={"flex flex-col justify-center items-start gap-4 my-4"}>
                    <label htmlFor={"password"} className={"font-bold uppercase cursor-pointer"}>
                        Password
                    </label>
                    <div className={"relative w-full flex justify-center items-center"}>
                        <input
                            type={`${showPassword ? "text" : "password"}`}
                            name={"password"}
                            id={"password"}
                            className={"bg-gray-700 w-full rounded outline-none p-2 pr-10"}
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button onClick={togglePassword} className={"absolute right-2"}>
                            {showPassword ? <i className={"fas fa-eye"}></i> :
                                <i className={"fas fa-eye-slash"}></i>}
                        </button>
                    </div>
                    <div className={"flex justify-end w-full items-center gap-2"}>
                        <Link href={"/admin/forgot"}
                              className={"text-sm text-teal-400 hover:text-teal-300 transition-colors duration-500"}>
                            Forgot Password?
                        </Link>
                    </div>
                </div>

                <div className={"flex flex-col w-full justify-center items-center gap-4 my-4 mt-6"}>
                    <button
                        type={"submit"}
                        className={"bg-teal-600 w-full p-4 rounded text-gray-100 uppercase hover:bg-teal-800 transition-colors duration-500"}
                        disabled={loading}
                    >
                        {loading ? "Logging In..." : "Login"}
                    </button>
                </div>
                <div className={"flex justify-center w-full items-center gap-2"}>
                    <p className={"text-sm text-gray-400"}>
                        Don't have an account?
                    </p>
                    <Link href={"/admin/signup"}
                          className={"text-sm text-teal-400 hover:text-teal-300 transition-colors duration-500"}>
                        Signup
                    </Link>
                </div>
            </form>
        </section>
    )
}

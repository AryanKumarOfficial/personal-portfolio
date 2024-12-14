"use client";

import React, {useEffect} from "react";
import toast from "react-hot-toast";
import useAuth from "@/backend/store/Auth";
import {useRouter} from "next/navigation";
import Link from "next/link";
import Icon from "@/app/admin/components/Icon";
import {LoginSchema, loginSchema} from "@/backend/schema/login"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


export default function LoginPage() {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    });
    const {login, token} = useAuth();
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onSubmit = async (data: LoginSchema) => {
        try {
            setLoading(true);
            const userData = await login(data.email, data.password);

            if (!userData.success) {
                toast.error(userData.error!.message);
            } else {
                toast.success("Logged in successfully!")
                router.push("/admin");
            }

        } catch (error) {
            console.log(error, "error login user")
        } finally {
            setLoading(false)
            reset();
        }


    }

    const togglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    useEffect(() => {
        if (token) {
            router.push("/admin");
        }
    }, [token]);


    return (
        <section className="flex w-1/3 bg-gray-900 justify-center items-center text-teal-400 pt-28">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 w-full rounded-lg shadow-lg px-10 py-6">
                <h1 className={'uppercase text-3xl font-bold text-center'}>Login</h1>

                <div className={"flex flex-col justify-center items-start gap-4 my-4"}>
                    <label htmlFor={"email"} className={"font-bold uppercase cursor-pointer"}>
                        Email
                    </label>
                    <input
                        type={"email"}
                        id={"email"}
                        className={"bg-gray-700 w-full rounded outline-none p-2"}
                        {...register('email')}
                    />
                </div>

                <div className={"flex flex-col justify-center items-start gap-4 my-4"}>
                    <label htmlFor={"password"} className={"font-bold uppercase cursor-pointer"}>
                        Password
                    </label>
                    <div className={"relative w-full flex justify-center items-center"}>
                        <input
                            type={`${showPassword ? "text" : "password"}`}
                            id={"password"}
                            className={"bg-gray-700 w-full rounded outline-none p-2 pr-10"}
                            {...register('password')}
                        />
                        <button onClick={togglePassword} className={"absolute right-2"}>
                            {showPassword ? <Icon className={"fas fa-eye"}/> :
                                <Icon className={"fas fa-eye-slash"}/>}
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

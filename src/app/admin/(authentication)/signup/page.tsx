"use client"
import React, {useEffect} from "react";
import toast from "react-hot-toast";
import useAuth from "@/backend/store/Auth";
import {useRouter} from "next/navigation";
import Link from "next/link";


export default function SignUp() {
    const {createAccount, session} = useAuth();
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState(false);
    const [showCPassword, setShowCPassword] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: "",
        cPassword: "",
    });
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");

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
            if (!formData.name || !formData.email || !formData.password || !formData.cPassword) {
                toast.error("All fields are required");
                return;
            }

            if (formData.password !== formData.cPassword) {
                toast.error("Passwords do not match");
                return;
            } else if (formData.password.length < 8) {
                toast.error("Password must be at least 8 characters long");
                return;
            }
            const userData = await createAccount(formData.name, formData.email, formData.password);

            if (!userData.success) {
                toast.error(userData.error!.message);
            } else {
                toast.success("Account Created Successfully!")
                router.push("/admin/login");
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

    const toggleCPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowCPassword(!showCPassword);
    }

    useEffect(() => {
        if (formData.password !== formData.cPassword && formData.password.length !== 0 && formData.cPassword.length !== 0) {
            setError("Passwords do not match");
        } else if (formData.password === formData.cPassword || formData.password.length === 0 || formData.cPassword.length === 0) {
            setError("");
        }
    }, [formData.password, formData.cPassword]);

    useEffect(() => {
        if (session) {
            router.push("/admin");
        }
    }, [session]);

    return (
        <section className="flex bg-gray-900 w-1/3 justify-center items-center text-teal-400 pt-28">
            <form onSubmit={handleSubmit} className="bg-gray-800 w-full rounded-lg shadow-lg px-10 py-6">
                <h1 className={'uppercase text-3xl font-bold text-center'}>Signup</h1>

                <div className={"flex flex-col justify-center items-start gap-4 my-4"}>
                    <label htmlFor={"name"} className={"font-bold uppercase cursor-pointer"}>
                        Name
                    </label>
                    <input
                        type={"text"}
                        name={"name"}
                        id={"name"}
                        className={"bg-gray-700 w-full rounded outline-none p-2"}
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

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
                </div>

                <div className={"flex flex-col justify-center items-start gap-4 my-4"}>
                    <label htmlFor={"cPassword"} className={"font-bold uppercase cursor-pointer"}>
                        Confirm Password
                    </label>
                    <div className={"relative w-full flex justify-center items-center"}>
                        <input
                            type={`${showCPassword ? "text" : "password"}`}
                            name={"cPassword"}
                            id={"cPassword"}
                            className={"bg-gray-700 w-full rounded outline-none p-2 pr-10"}
                            value={formData.cPassword}
                            onChange={handleChange}
                        />
                        <button onClick={toggleCPassword} className={"absolute right-2"}>
                            {showCPassword ? <i className={"fas fa-eye"}></i> :
                                <i className={"fas fa-eye-slash"}></i>}
                        </button>
                    </div>
                </div>

                {error && <p className={"text-red-500 text-sm"}>{error}</p>}

                <div className={"flex flex-col w-full justify-center items-center gap-4 my-4 mt-6"}>
                    <button
                        type={"submit"}
                        className={"bg-teal-600 w-full p-4 rounded text-gray-100 uppercase hover:bg-teal-800 transition-colors duration-500"}
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </div>
                <div className={"flex flex-row w-full justify-center items-center gap-1 my-4 mt-6"}>
                    <p className={"text-gray-400"}>
                        Already have an account?
                    </p>
                    <Link href={"/admin/login"}
                          className={"text-teal-400 font-semibold hover:text-teal-300 transition-colors duration-500"}>
                        Login
                    </Link>
                </div>
            </form>
        </section>
    )
}
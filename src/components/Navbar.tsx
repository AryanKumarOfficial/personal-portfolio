import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="p-4 fixed w-full z-10 shadow-md"
             style={{
                 background: "rgba(255,255,255,0.02)",
             }}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold capitalize">
                    AryanKumarOfficial
                </Link>
                <div className="flex space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">Home
                    </Link>
                    <Link href="/about" className="text-gray-300 hover:text-white">About
                    </Link>
                    <Link href="/portfolio" className="text-gray-300 hover:text-white">Portfolio
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white">Contact
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;

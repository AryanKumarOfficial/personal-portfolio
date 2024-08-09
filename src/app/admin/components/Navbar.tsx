import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white">
          <div className="p-6 text-center text-lg font-bold">
            Admin Dashboard
          </div>
          <nav className="mt-10">
            <Link
              href="/admin/users"
              className="block py-2.5 px-4 hover:bg-gray-700"
            >
              Users
            </Link>
            <Link
              href="/admin/settings"
              className="block py-2.5 px-4 hover:bg-gray-700"
            >
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white shadow p-4 flex justify-between">
            <div>
              <h1 className="text-xl font-semibold">Welcome, {`user.name`}</h1>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Logout
            </button>
          </header>

        </div>
      </div>
    </>
  );
};

export default Navbar;

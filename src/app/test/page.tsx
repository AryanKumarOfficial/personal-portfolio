import React from "react";

export default function TestPage() {

    return (
        <main className={"flex justify-center items-center min-h-screen"}
              style={{
                  background: `url("https://images.unsplash.com/photo-1722082839802-18b18cb23a62?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
              }}
        >

            <div className={"bg-transparent p-8 rounded-lg"}
            style={{
                backdropFilter: "blur(5px)",
                background: "rgba(255, 255, 255, 0.001)"
            }}
            >
                <h1 className={"text-3xl font-bold text-center"}>Test Page</h1>
                <p className={"text-center"}>This is a test page</p>
            </div>

        </main>
    )
}
import React, {Suspense} from "react";
import EmailVerification from "@/app/admin/components/VerifyEmail";

export default function VerifyPage() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <EmailVerification/>
            </Suspense>
        </>
    )
}
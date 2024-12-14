import React, {ReactNode} from "react";
import SettingsLayout from "@/app/admin/components/SettingsLayout";

export default function Layout({children}: { children: ReactNode }) {
    return (
        <SettingsLayout>{children}</SettingsLayout>
    );
}
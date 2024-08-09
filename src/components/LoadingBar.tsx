"use client";
import React, {useState, useEffect} from "react";
import LoadingBar from "react-top-loading-bar";
import {usePathname} from "next/navigation";

const SleekLoadingBar: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        setProgress(100);
    }, [pathname]);

    return (
        <div>
            <LoadingBar
                color="#64ffda"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                shadow={true}
                transitionTime={500}
                loaderSpeed={1000}
                waitingTime={500}
            />
        </div>
    );
}

export default SleekLoadingBar;
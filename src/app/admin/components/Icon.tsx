import React from "react";

const Icon = ({className}: { className: string }) => {
    return <i className={className} suppressHydrationWarning/>;
};

export default Icon;
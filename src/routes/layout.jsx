import React, { useRef, useState } from "react";
import Sidebar from "../layouts/sidebar";

import { useMediaQuery } from "@uidotdev/usehooks";

import { cn } from "../utils/cn";
import Header from "../layouts/header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const isDesktopDevice = useMediaQuery("(min-width: 768px)");
    const [collapsed, setCollapsed] = useState(false);

    const sidebarRef = useRef(null);

    return (
        <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
            <Sidebar
                ref={sidebarRef}
                collapsed={collapsed}
            />
            <div className={cn("transition-[margin] duration-300")}>
                <Header />
                <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;

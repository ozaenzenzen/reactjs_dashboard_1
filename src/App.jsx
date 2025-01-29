import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "./contexts/theme-context";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <DashboardPage /> },
                { path: "analytics", element: <h1 className="title">Analytics</h1> },
            ],
        },
    ]);

    return <ThemeProvider storageKey="theme">Hello World</ThemeProvider>;
}

export default App;

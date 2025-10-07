import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../error/ErrorPage";
import Apps from "../pages/Apps";
import RootLayout from "../layouts/RootLayout";
import Installation from "../pages/Installation";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                index:true,
                Component: Home
            },
            {
                path:"/apps",
                Component:Apps
            },
            {
                path:'/installation',
                Component: Installation
            }
        ]
    }
])

export default router
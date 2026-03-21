import { Outlet } from "react-router-dom";
import Footer from "./Footer"
import Header from "./Header"

const AppLayout = () => {
    // <Outlet /> is a placeholder component used for nested routes.
    // 👉 It tells React Router:
    // “Render the child route component HERE”
    return (
        <>
            <Header/>
            <Outlet />
            <Footer/>
        </>
    )
}

export default AppLayout;
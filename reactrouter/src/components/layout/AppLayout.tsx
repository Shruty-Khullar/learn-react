import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer"
import Header from "./Header"

const AppLayout = () => {
    // <Outlet /> is a placeholder component used for nested routes.
    // 👉 It tells React Router:
    // “Render the child route component HERE”
    //It’s returns the state of the current active navigation happening anywhere in the router
    const Navigation = useNavigation();
    console.log(Navigation);
    if(Navigation.state === 'loading') return <p>Loading...</p>
    return (
        <>
            <Header/>
            <Outlet />
            <Footer/>
        </>
    )
}

export default AppLayout;
import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const err = useRouteError();
    console.log(err)
    //returns fn -> navigate(to, options...) -> navigate(1) -> movws
    const navigate = useNavigate();
    if(err.status === 404)
        return (
            <section className="error-section">
            <div id="error-text">
                <figure>
                <img
                    src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                    alt="404 page"
                />
                </figure>
                <div className="text-center">
                <p className="p-a">. The page you were looking for could not be found</p>
                {/* This will always takes us back to Home page */}
                {/* <NavLink to='/'>Back to Home page</NavLink> */}
                </div>
                <button onClick={()=>navigate(-1)}>
                    Go back
                </button>
            </div>
            </section>
        )
    return <p>Page not found</p>
}
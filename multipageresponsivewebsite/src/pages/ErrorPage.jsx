import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (
       <div>
        <h1>Oops! Error Occured</h1>
        {err && <p>{err.data}</p>}
        <NavLink to='/'>
            <button>Go back to Home</button>
        </NavLink>
       </div>
    ) 
}
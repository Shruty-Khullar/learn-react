import { NavLink } from "react-router-dom";
export const Card = ({currMovie}) => {
    const {Poster, imdbID} = currMovie;
    return (
        <>
            <li className="hero-container">
                <div className="main-container">
                    <div className="poster-container">
                    <img src={Poster} className="poster" alt={imdbID} />
                    </div>
                    <div className="ticket-container">
                    <div className="ticket__content">
                        {/* Navlink return react element
                        {
                            type: NavLink,
                            props: {
                                to: `/movie/${imdbID}`,
                                children: {
                                type: "button",
                                props: {
                                    className: "ticket__buy-btn",
                                    children: "Watch now"
                                }
                                }
                            }
                            }
                        */}
                        <NavLink to={`/movie/${imdbID}`}>
                            <button className="ticket__buy-btn">Watch now</button>
                        </NavLink>
                    </div>
                    </div>
                </div>
            </li>
        </>
    )
}
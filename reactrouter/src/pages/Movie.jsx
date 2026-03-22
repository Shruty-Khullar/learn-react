import { useLoaderData } from "react-router-dom"
import { Card } from "../components/UI/Card";

export const Movie = () => {
    // Accessing loader data ->> data returned by loader
    const moviesData = useLoaderData();
    console.log(moviesData)
    return (
        <>
            <ul>
                {moviesData && moviesData.Search.map(currMovie => {
                    return <Card id={currMovie.imdbID} currMovie={currMovie}/>
                })}
            </ul>
        </>
    )
}
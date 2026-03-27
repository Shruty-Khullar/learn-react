import { useLoaderData, useNavigate, useParams } from "react-router-dom"
export const MovieDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    console.log(`Data: ${JSON.stringify(data)}`)
    return (
        <div className="movie-card">
            <img src={data.Poster} alt={data.Title} className="movie-poster" />
            <div className="movie-info">
                <h2>{data.Title}</h2>
                <p>⭐ {data.imdbRating}/10</p>
                <p>🎬 {data.Genre}</p>
                <p>⏱ {data.Runtime}</p>
                <p>📅 {data.Released}</p>
            </div>
            <button onClick={()=> navigate(-1)}>Go Back</button>
        </div>
    )
}
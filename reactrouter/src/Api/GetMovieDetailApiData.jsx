export const getMovieDetailApiData = async ({params}) => {
    const id = params.movieID;
    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=1c12799f`);
        const data = await response.json();
        console.log(data)
        return data;
    } catch(err) {
        console.log(err);
    }
}
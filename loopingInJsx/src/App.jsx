// JSON files do NOT use export statements in React (or JavaScript in general). simply import them
import seriesData from "./api/seriesData.json";

const NetflixSeriesWithDynamicValues = () => {
    // const name = "Kung Fu Cat";
    // const rating = 9.1;
    // const returnGenre = () => {
    //   const genre = "Animals";
    //   return genre;
    // }
    return (
      <ul>
        {seriesData.map((currElem) => {
            // You must explicitly return the JSX.
          return (
            // You should add a key React needs keys for list rendering performance.
            // ✔ {} → need return
            // ✔ () → auto return
            <li key={currElem.id}> 
            <div>
              <img src={currElem.img_url} alt="Kung Fu Panda jpg" height="40%" width="80%"/>
            </div>
            <h2>Name: {currElem.name}</h2>
            <h3>rating: {currElem.rating}</h3>
            <p>summary: {currElem.description}</p>
            <p>Cast: {currElem.cast}</p>
            {/* _blank opens link ref in other tab */}
            <a href = {currElem.watch_url} target="_blank">
              <button>Watch Now</button>
            </a>
          </li>
          ) 
        })}
      </ul>
    )

}
export default NetflixSeriesWithDynamicValues;

// export const App = () => {
//   return (
//     <>x
//       <div>
//         <img src="panda.jpg" alt="Kung Fu Panda jpg" height="40%" width="80%"/>
//       </div>
//       <h2>Name: Kung Fu Panda</h2>
//       <h3>rating: 9.1</h3>
//       <p>Kung Fu Panda is an animated adventure about Po, a clumsy panda who unexpectedly becomes the chosen Dragon Warrior destined to save the Valley of Peace.
// Through courage, self-belief, and training, he transforms his weaknesses into strengths and defeats the powerful villain Tai Lung.
//       </p>
//     </>
//   )
// }

// //If we need x cards we will need this code snippet copy pasted x times. So instead of using this as code, we will create a component nd will use it x number of times

export const App = () => {
  return (
    <>
      <NetflixSeries/>
      <NetflixSeriesWithDynamicValues/>
      <NetflixSeries/>
      <NetflixSeriesWithDynamicValues/>
    </>
  );
};

//component
const NetflixSeries = () => {
  return (
    <>
      <div>
        <img src="panda.jpg" alt="Kung Fu Panda jpg" height="40%" width="80%"/>
      </div>
      <h2>Name: Kung Fu Panda</h2>
      <h3>rating: 9.1</h3>
      <p>Kung Fu Panda is an animated adventure about Po, a clumsy panda who unexpectedly becomes the chosen Dragon Warrior destined to save the Valley of Peace.
Through courage, self-belief, and training, he transforms his weaknesses into strengths and defeats the powerful villain Tai Lung.
      </p>
    </>
  )
}

//dynamic values inside jsx -> using { }
const NetflixSeriesWithDynamicValues = () => {
    const name = "Kung Fu Cat";
    const rating = 9.1;
    const returnGenre = () => {
      const genre = "Animals";
      return genre;
    }
    return (
      <>
        <div>
          <img src="cat.jpg" alt="Kung Fu Panda jpg" height="40%" width="80%"/>
        </div>
        <h2>Name: {name}</h2>
        <h3>rating: {rating}</h3>
        <p>Kung Fu Panda is an animated adventure about Po, a clumsy panda who unexpectedly becomes the chosen Dragon Warrior destined to save the Valley of Peace.
  Through courage, self-belief, and training, he transforms his weaknesses into strengths and defeats the powerful villain Tai Lung.
        </p>
        <h3>Genre: {returnGenre()}</h3>
      </>
    )

}
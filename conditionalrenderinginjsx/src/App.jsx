export const App = () => {
  return (
    <>
      {/* <NetflixSeriesWithDynamicValues /> */}
      {/* <NetflixSeriesWithDynamicValuesM2/> */}
      <NetflixSeriesWithDynamicValuesM3/>
    </>
  )

}
//you cannot directly reference the public folder of another project from your React/Vite app.

//M1
const NetflixSeriesWithDynamicValuesM1 = () => {
    const name = "Kung Fu Cat";
    const rating = 9.1;
    const returnGenre = () => {
      const genre = "Animals";
      return genre;
    }
    const age = prompt("Enter your age", 10);
    //this breaks DRY Principal ( do not repeat urself)
    if(age<10){
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
        <button>Not Available</button>
      </>
      )

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
        <button>Available</button>
      </>
    )

}

//using ternary condition
const NetflixSeriesWithDynamicValuesM2 = () => {
  const name = "Kung Fu Cat";
  const rating = 9.1;
  const returnGenre = () => {
    const genre = "Animals";
    return genre;
  }
  const age = prompt("Enter age", 10)
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
      <button> {age>10 ? "Available" : "Not Available"} </button>
    </>
  )

}

//using a var
const NetflixSeriesWithDynamicValuesM3 = () => {
  const name = "Kung Fu Cat";
  const rating = 9.1;
  const returnGenre = () => {
    const genre = "Animals";
    return genre;
  }
  const age = prompt("Enter age", 10)
  let canWatch = "Not Available";
  if (age>10) canWatch = "Available";
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
      <button> {canWatch} </button>
    </>
  )

}


// //if we have to create a button using JS
// const age = prompt("Age")
// const btn = document.createElement('button')
// btn.textContent = age>19 ? "Available" : "not available";
// document.body.appendChild(btn)
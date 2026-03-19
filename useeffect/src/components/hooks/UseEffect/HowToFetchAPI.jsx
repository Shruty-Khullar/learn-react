import { useState, useEffect } from "react"

export const HowToFetchAPi = () => {
    const [apiData, setAPiData] = useState([]);
    //called once on initial render - handled sideeffects
    const API = "https://jsonplaceholder.typicode.com/posts";
    useEffect(()=> {
        fetch(API)
        .then(data => data.json())
        .then(data => setAPiData(data))
        .catch(err => console.log(err));
    }, [])
     console.log(apiData);
    return (
        <div>
            <ul>
                {
                    apiData.map((currData)=> 
                        <li id={currData.id}>
                            {currData.title}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

//In map Without {} → implicit return
// arr.map(x => x * 2)

//2️⃣ With {} → explicit return required
//arr.map(x => {
//     return x * 2
// })
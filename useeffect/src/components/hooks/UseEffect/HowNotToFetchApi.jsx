import { useState } from "react";

export const HowNotToFetchAPi = () => {
    const [apiData, setApiData] = useState([]);
    const data = fetch("https://jsonplaceholder.typicode.com/posts")
        .then(resp => resp.json())
        .then(data => setApiData(data))
        .catch(error => console.log(error));
    console.log(apiData)

    return (
        <div>
            <ul>
                data: {
                    apiData.map((currData)=>
                        <li key={currData.id}>
                            {currData.title}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

//here once the data is fetched, the setAPIData sets the apiData with JSON, now apiData is modified the component re-renders again as we are returning the apiData in ul. then again fetch call will be done and so on... SO we will get infinite APi calls
//Thats why we use useEffect with external effects like fetch call data
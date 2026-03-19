import { use, useEffect, useState } from "react"
import './Pokemon.css'
export const HowToFetchAPIPokemon = () => {
    const [apiData, setApiData] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const API = 'https://pokeapi.co/api/v2/pokemon/pikachu'
    //Using promises
    // const fetchPokemon = () => {
    //     fetch(API)
    //         .then(res => res.json())
    //         .then(data => {
    //             setApiData(data)
    //             setIsLoading(false);
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             setError(err)
    //             setIsLoading(false)
    //         });
    // }

    //Async Await
    const fetchPokemon = async () => {
        try {
            //returns promise so wait
            const resp = await fetch(API);
            //resp.json() also return prmose
            const data = await resp.json();
            setApiData(data);
            setIsLoading(false);
        }
        // If an error happens in try
        // The error object is passed to catch(error) 
        catch(error) {
            console.log(error);
            setError(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemon();
    },[]);
    console.log(apiData)
    if(isLoading){
        return (
            <div>
                <h1>Loading ....</h1>
            </div>
        )
    }
    if(error){
        return (
            <div>
                <h1>Error: {error.message}</h1>
            </div>
        )
    }

    return (
        <section>
            <header>
                <h1>Lets Catch Pokemon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card"> 
                    <figure>
                        <img
                            src={apiData?.sprites?.other?.dream_world?.front_default}
                            alt={apiData.name}
                            className="pokemon-image"
                        />
                    </figure>
                    <h1>{apiData.name}</h1>
                    <div className="grid-three-cols">
                        <p className="pokemon-info">
                            Height: <span> {apiData.height} </span>
                        </p>
                        <p className="pokemon-info">
                            Weight: <span> {apiData.weight}</span>
                        </p>
                        <p className="pokemon-info">
                            speed: <span>{apiData.stats[5].base_stat}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    )
}


//first time -> console.log(apiData) = empty as first time it is initialised as empty later it got data so apiData.name->undef for firt time
//React tries to convert something into renderable UI.

// React only knows how to render these types:
// ✅ Valid React children
// string → "hello"
// number → 10
// JSX → <p>Hello</p>
// array of JSX → [<li/>, <li/>]
// null, undefined, false → renders nothing
// If something is an object, React doesn't know how to display it.
// const obj = { name: "John" };
// return <div>{obj}</div>;
// React tries to convert it to a string internally and gets:
// [object Object]
// Since React cannot render objects, it throws the error:
// Objects are not valid as a React child


//     if(error){
//         return (
//             <div>
//                 <h1>Error: {error}</h1>
//             </div>
//         )
//     }
// Objects are not valid as a React child (found: [object Error])
// This means React received an Error object.





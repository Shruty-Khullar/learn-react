import { useEffect, useState } from 'react';
import {PokemonCards} from './PokemonCards'
import './index.css'
export const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [err, setErr] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
    const API = "https://pokeapi.co/api/v2/pokemon?limit=400";
    const SearchPokemonData = pokemon.filter((curr)=>curr.name.toLowerCase().includes(search.toLowerCase()));
    
    const fetchPokemon = async () => {
        try {
            //res will be a Response object returned by the Fetch API. It is not the Pokémon data yet. It only contains metadata about the HTTP response.
            const res = await fetch(API);
            const data = await res.json();
            console.log(data);

            const detailedPokemon = data.results.map(async (currPokemon) => {
                const res = await fetch(currPokemon.url);
                const data = await res.json();
                //js obj
                //console.log(data)
                //When a function is declared async, it always returns a Promise.
                // Even if the function returns a normal JavaScript object, JavaScript automatically wraps it inside Promise.resolve().
                // Therefore, when map() is used with an async callback, it returns an array of Promises, not the actual values.
                return data;
            })
            console.log(detailedPokemon); //[Promise1, Promise2, Promise3, ... Promise24]
            //Promise.all() returns an array of objects.
            const detailedResponses = await Promise.all(detailedPokemon);
            console.log(detailedResponses)
            setPokemon(detailedResponses);
            setIsLoading(false);
        } catch(err) {
            console.log(err)
            setIsLoading(false);
            setErr(err);
        }
    }

    useEffect(()=> {
        fetchPokemon();
    },[])

    if(isLoading){
        return (
            <p>Loading....</p>
        )
    }
    if(err){
        return (
            <p>
                Error: {err.message}
            </p>
        )
    }
    return (
        <>
            <section className='container'>
                <header>
                    <h1>Lets Catch Pokemon</h1>
                </header>
                <div className='pokemon-search'>
                    <input type='text' placeholder='Search Pokemon' value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>
                <div>
                    <ul className='cards'>
                        {
                            SearchPokemonData.map((currPokemon) => {  
                                return <PokemonCards pokemonData={currPokemon} />
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}
export const PokemonCards = ({pokemonData}) => {
    return (
        <li key={pokemonData.id} className="pokemon-card">
            <figure>
                <img
                     src={pokemonData?.sprites?.other?.dream_world?.front_default}
                     alt={pokemonData.name}
                     className="pokemon-image"
                />
            </figure>
            <h1 className="pokemon-name">{pokemonData.name}</h1>
            <div className="pokemon-info pokemon-highlight">
                <p>
                    {pokemonData.types.map((currType)=>currType.type.name).join(", ")}
                </p>
            </div>

            <div className="grid-three-cols">
                <p className="pokemon-info">
                    <span>Height: </span> {pokemonData.height}
                </p>
                <p className="pokemon-info">
                    <span>Weight: </span> {pokemonData.weight}
                </p>
                <p className="pokemon-info">
                    <span>Speed: </span> {pokemonData.stats[5].base_stat}
                </p>
            </div>

            <div className="grid-three-cols">
                <p className="pokemon-info">
                    <span>Experience: </span> {pokemonData.base_experience}
                </p>
                <p className="pokemon-info">
                    <span>Attack: </span> {pokemonData.stats[1].base_stat}
                </p>
                <p className="pokemon-info">
                    <span>Abilities: </span> {pokemonData.abilities[0].ability.name}
                </p>
            </div>
        </li>
    )
}


//<span>Abilities: </span> {pokemonData.abilities[0].ability.name}
// pokemonData.abilities.map((curr)=>curr.ability.name).split(0,1).join(", ")
// curr)=>curr.ability.name -> ["overgrow", "chlorophyll"]
// .split(0,1) -> ["overgrow"]
// .join(", ") -> join() converts the array into a string. so 1 element array is converted to string 
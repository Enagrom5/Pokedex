function PokemonCard({pokemon}) {
  console.log(pokemon)
  
  return (
    <p>
      {pokemon.name === "bulbasaur" ? (
        <figure>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"></img>
          <figcaption>Bulbasaur</figcaption>
        </figure>
      ) : (
        "???"
      )}{" "}
    </p>
  );
}

export default PokemonCard;

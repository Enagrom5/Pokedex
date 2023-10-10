const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemon = pokemonList[1].name;
  return (
    <p>
      {pokemon === "bulbasaur" ? (
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

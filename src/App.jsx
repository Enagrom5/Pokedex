import PokemonCard from "./components/PokemonCard";
import "./app.css";
import { useState } from "react";
import NavBar from "./components/NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  let [pokemonIndex, setPokemonIndex] = useState(0);
  console.log(pokemonIndex);
  let handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
    console.log(pokemonIndex);
  };
  let handleClickPrev = () => {
    setPokemonIndex(pokemonIndex - 1);
    console.log(pokemonIndex);
  };

  let pokemon = pokemonList[pokemonIndex];
  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <NavBar
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        setPokemonIndex={setPokemonIndex}
      />
    </div>
  );
}

export default App;

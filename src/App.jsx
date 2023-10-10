import PokemonCard from "./components/PokemonCard";
import "./app.css";

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

function App() {
  let pokemon = 
   pokemonList[0]
  ;

  return <PokemonCard pokemon={pokemon} />;
}

export default App;

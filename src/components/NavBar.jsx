function NavBar({ pokemonList, pokemon, setPokemon }) {
  let handleClickChangePokemon;
 

  return (
    <div className="nav">
      {pokemonList.map((poke) => (
        <div>
          <button
            key={poke.name}
            onClick={() => handleClickChangePokemon(poke)}
          >
            {poke.name}
          </button>
        </div>
      ))}

      {
        (handleClickChangePokemon = (poke) => {
          setPokemon((pokemon = poke));
        })
      }
    </div>
  );
}

export default NavBar;

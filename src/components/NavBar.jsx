function NavBar({
  pokemonIndex,
  setPokemonIndex,
  handleClickNext,
  handleClickPrev,
  pokemonList,
}) {
  return (
    <>
     
      {pokemonIndex > 0 ? (
        <button onClick={handleClickPrev}>Précédent</button>
      ) : (
        <p></p>
      )}
      
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickNext}>Suivant</button>
      ) : (
        <p></p>
      )}
    </>
  );
}
export default NavBar;

import PropTypes from "prop-types";
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function PokemonCard({ pokemon }) {
  

  return (
    <>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc}></img> : <p>???</p>}
     {<p>{pokemon.name}</p>}
    </>
  );
}



export default PokemonCard;

import PropTypes from "prop-types";
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function PokemonCard({ pokemon }) {
  

  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc}></img> : <p>???</p>}
     {<p>{pokemon.name}</p>}
    </figure>
  );
}



export default PokemonCard;

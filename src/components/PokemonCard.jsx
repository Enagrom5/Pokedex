import PropTypes from "prop-types";
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const pokeMakeUp = {
  width: "300px",
  padding: "3rem",
  marginTop:"2rem",
  backgroundColor: "azure",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px gray",
  color: "grey",
  fontSize: "1.6rem",
  textAlign: "center",
  textShadow: "0px 0px 5px gray",
};
const imgMakeUp = {
  width: "200px",
 
};

function PokemonCard({ pokemon }) {
  return (
    <>
    <div style={pokeMakeUp}>
      {pokemon.imgSrc ? <img style={imgMakeUp} src={pokemon.imgSrc}></img> : <p>???</p>}
      {<p>{pokemon.name}</p>}
      
    </div>
    {pokemon.name === "pikachu" ? (
      alert("pika pika !! PIKACHUUUUUUUUUUU")
    ) : (
      <p></p>
    )}</>
  );
}

export default PokemonCard;

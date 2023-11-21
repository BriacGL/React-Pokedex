import PropTypes from 'prop-types';
import './assets/PokemonCard.css';

function PokemonCard({ pokemon }) {
  console.log(pokemon);
  return (
    <figure className="pokemon-card">
      {pokemon && pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon ? pokemon.name : 'Unknown'}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
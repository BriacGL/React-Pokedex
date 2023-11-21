import './assets/PokemonCard.css';

function PokemonCard(props) {
  console.log(props); 
  const { pokemon } = props;

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

export default PokemonCard;
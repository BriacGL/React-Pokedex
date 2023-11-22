import PropTypes from 'prop-types';

function NavBar({ pokemonList, onPokemonClick }) {
  const handlePokemonClick = (index) => {
    const selectedPokemon = pokemonList[index].name.toLowerCase();
    onPokemonClick(index);
    
    if (selectedPokemon === 'pikachu') {
      alert('pika pikachu !!!');
    }
  };

  return (
    <div className="NavBar">
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handlePokemonClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
  onPokemonClick: PropTypes.func.isRequired,
};

export default NavBar;

import { useState } from 'react';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
  
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
  
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
  
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
  
    {
      name: "Mew",
    },
  
  ];


  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);
  
    const handlePreviousClick = () => {
      if (pokemonIndex > 0) {
        setPokemonIndex(prevIndex => prevIndex - 1);
      }
    };
  
    const handleNextClick = () => {
      if (pokemonIndex < pokemonList.length - 1) {
        setPokemonIndex(prevIndex => prevIndex + 1);
      }
    };
  
    return (
      <div className="App">
        <h1>Pokémon App</h1>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
  
        {pokemonIndex > 0 && (
          <button onClick={handlePreviousClick}>Précédent</button>
        )}
  
        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={handleNextClick}>Suivant</button>
        )}
      </div>
    );
  }
  
  export default App;
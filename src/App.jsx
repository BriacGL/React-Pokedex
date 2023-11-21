import './App.css';
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: 'Bulbasaur',
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'Mew',
  },
];

function App() {
  const selectedPokemon = pokemonList[0];

  return (
    <div className="App">
      <h1>Pokémon App</h1>
      <PokemonCard pokemon={selectedPokemon} /> {}
    </div>
  );
}

export default App;
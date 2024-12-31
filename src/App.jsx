import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  // Calling API
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((json) => {
        const results = json.results;
        const firstPokemonUrl = results[0].url;
        console.log(firstPokemonUrl);

        // Fetching from the first Pokémon's URL
        return fetch(firstPokemonUrl);
      })
      .then((response) => response.json())
      .then((details) => {
        setPokemonDetails(details.sprites);
        console.log(details);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(pokemonDetails);
  return (
    <>
      <Header />
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState([]);

  // Fetching from API
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        const cardData = pokemonDetails.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.front_default,
        }));

        setCards(cardData);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    };

    fetchPokemon();
  }, []);

  // console.log(pokemonDetails);

  return (
    <>
      <Header />
      <Card cards={cards} />
    </>
  );
}

export default App;

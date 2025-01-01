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
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        console.log(pokemonDetails);

        const cardData = pokemonDetails.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other["official-artwork"]["front_default"],
        }));

        setCards(cardData);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <Header />
      <main className="card-container">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </main>
    </>
  );
}

export default App;

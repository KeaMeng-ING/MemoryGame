import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCard, setClickedCard] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Fetching from API
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        const data = await response.json();

        // Fetch another url from the data -- that would be not needed in usual case
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

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

  function handleClickedCard(id) {
    if (clickedCard.includes(id)) {
      console.log("You lose");
      if (score > highScore) {
        setHighScore(score);
      }

      setClickedCard([]);
      shuffleCard();
      setGameOver(true);
      return;
    }
    setClickedCard([...clickedCard, id]);
    setScore(score + 1);
    shuffleCard();
  }

  function shuffleCard() {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }

  function restartGame() {
    setGameOver(false);
    shuffleCard();
    setScore(0);
  }

  return (
    <>
      <Header score={score} highScore={highScore} />
      {gameOver && (
        <>
          <div className="overlay"></div>
          <div className="game-over">
            <img
              src="https://pokemon-memory-game-dtb.pages.dev/assets/pokeLogo-7fTHLA1f.png"
              alt="logo"
            />
            <h1>Game Over!</h1>
            <div className="game-over-score">
              <h3>Score: {score}</h3>
              <h3>High Score: {highScore}</h3>
            </div>
            <button onClick={restartGame}>Play Again</button>
          </div>
        </>
      )}
      <main className="card-container">
        {cards.slice(0, 10).map((card) => (
          <Card key={card.id} card={card} onClick={handleClickedCard} />
        ))}
      </main>
    </>
  );
}

export default App;

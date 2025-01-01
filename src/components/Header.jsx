export default function Header({ score, highScore }) {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <img
            src="https://pokemon-memory-game-dtb.pages.dev/assets/pokeLogo-7fTHLA1f.png"
            alt="logo"
          />
          <p>Do not click the same card twice!</p>
        </div>

        <div className="scoreboard">
          <h2>Score: {score}</h2>
          <h2>High Score: {highScore}</h2>
        </div>
      </div>
    </header>
  );
}

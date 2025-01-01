export default function Header({ score, highScore }) {
  return (
    <header>
      <div className="header">
        <img
          src="https://pokemon-memory-game-dtb.pages.dev/assets/pokeLogo-7fTHLA1f.png"
          alt="logo"
        />
        <div className="scoreboard">
          <h2>Score: {score}</h2>
          <h2>High Score: {highScore}</h2>
        </div>
      </div>
    </header>
  );
}

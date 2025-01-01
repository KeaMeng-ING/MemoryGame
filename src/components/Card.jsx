export default function CardList({ card, onClick }) {
  return (
    <div className="card" onClick={() => onClick(card.id)}>
      <img src={card.image} alt={card.name} />
      <h2>{card.name}</h2>
    </div>
  );
}

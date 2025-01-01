import React from "react";

export default function CardList({ card }) {
  return (
    <div className="card">
      <img src={card.image} alt="" />
      <h2>{card.name}</h2>
    </div>
  );
}

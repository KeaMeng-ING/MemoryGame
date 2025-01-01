import React from "react";

export default function CardList({ cards }) {
  return (
    <div>
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform"
        >
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-32 object-contain"
          />
          <div className="text-center mt-2 capitalize font-medium">
            {card.name}
          </div>
        </div>
      ))}
    </div>
  );
}

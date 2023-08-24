import { useEffect, useState } from "react";
import { fetchCards } from "../../models/api";

function CardArea() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetchCards().then((dto) => setCards(dto));
  }, [fetchCards]);

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
          {card.front}, {card.back}
        </div>
      ))}
    </div>
  );
}

export default CardArea;

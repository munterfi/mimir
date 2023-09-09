import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { fetchCards } from "../api/cards";
import { CardEditor } from "./CardEditor";
import { CardEntry } from "./CardEntry";
import { Main } from "./Main";

export const CardList = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetchCards().then(setCards);
  }, []);
  return (
    <div>
      <Heading>Add Card</Heading>
      <CardEditor cardId="" initFront="" initBack="" editorType="add" />
      <List>
        {cards.map((card) => (
          <CardEntry key={card.id} card={card} />
        ))}
        <Outlet />
      </List>
    </div>
  );
};

const List = styled(Main)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Heading = styled.div`
  margin: 40px 0 20px 0;
  font-weight: 600;
`;

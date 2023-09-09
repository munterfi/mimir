import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCards } from "../api/cards";
import { Card } from "../models/Card";
import { CardEditor } from "./CardEditor";

export const CardEdit = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<Card>();

  useEffect(() => {
    fetchCards().then((cards: Card[]) => {
      setCard(cards.find((c) => c.id === id));
    });
  }, [id]);

  return (
    <div>
      <Heading>Edit Card</Heading>
      <CardEditor
        // TODO: Fix the initial values passed into CardEditor. Somehow useState does not work and card is undefined...
        cardId={card?.id ?? ""}
        initFront={card?.front ?? ""}
        initBack={card?.back ?? ""}
        editorType="update"
      />
    </div>
  );
};

const Heading = styled.div`
  margin: 40px 0 20px 0;
  font-weight: 600;
`;

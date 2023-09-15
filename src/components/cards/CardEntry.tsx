import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCard } from "../../api/cards";
import { Card } from "../../models/Card";
import { AppContext } from "../../store/context";
import {TD, TR} from "../table.styles.ts";

interface Props {
  card: Card;
}

export const CardEntry = ({ card }: Props) => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`${card.id}`);
  };
  const handleDelete = () => {
    deleteCard(card.id);
    dispatch({ type: "remove-card", id: card.id });
  };

  return (
    <TR>
      <TD>{card.front}</TD>
      <TD>{card.back}</TD>
      <button onClick={handleEdit}>{"Edit"}</button>
      <button onClick={handleDelete}>{"Delete"}</button>
    </TR>
  );
};


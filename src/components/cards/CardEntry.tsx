import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { deleteCard } from "../../api/cards";
import { Card } from "../../models/Card";
import { AppContext } from "../../store/context";

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
        <Row>
            <div>{card.front}</div>
            <div>{card.back}</div>
            <button onClick={handleEdit}>{"Edit"}</button>
            <button onClick={handleDelete}>{"Delete"}</button>
        </Row>
    );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
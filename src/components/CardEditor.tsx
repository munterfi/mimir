import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { addCard, updateCard } from "../api/cards";

type InputAction = {
  type: "update-front-input" | "update-back-input";
  text?: string;
};

type CardAction = {
  type: "add-card" | "update-card";
};

type Action = InputAction | CardAction;

interface State {
  id: string;
  front: string;
  back: string;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "update-front-input":
      return { ...state, front: action.text ?? "" };
    case "update-back-input":
      return { ...state, back: action.text ?? "" };
    case "add-card":
      addCard(state.front, state.back);
      return { id: "", front: "", back: "" };
    case "update-card":
      updateCard({ id: state.id, front: state.front, back: state.back });
      return { ...state };
  }
}

interface Props {
  cardId: string;
  initFront: string;
  initBack: string;
  editorType: "add" | "update";
}

export const CardEditor = ({
  cardId,
  initFront,
  initBack,
  editorType,
}: Props) => {
  const navigate = useNavigate();
  const isAdd = editorType === "add";
  const [state, dispatch] = useReducer(reducer, {
    id: cardId,
    front: initFront,
    back: initBack,
  });

  const handleFrontInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "update-front-input", text: e.target.value });
  };
  const handleBackInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "update-back-input", text: e.target.value });
  };
  const handleButtonClick = () => {
    if (isAdd) {
      dispatch({ type: "add-card" });
      // TODO: Somehow we should fetch again all cards. How can we trigger an update of all card entries in the list? Navigate does not work...
      navigate("/cards");
    } else {
      dispatch({ type: "update-card" });
    }
  };

  return (
    <div>
      <input value={state.front} onChange={handleFrontInput} type="text" />
      <input value={state.back} onChange={handleBackInput} type="text" />
      <button onClick={handleButtonClick}>{isAdd ? "Add" : "Update"}</button>
    </div>
  );
};

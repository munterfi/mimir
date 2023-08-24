import { useState } from "react";
import GameArea from "./GameArea";
import CardArea from "./CardArea";

function Content() {
  const [mode, setMode] = useState<string>("game");

  if (mode === "game") {
    return <GameArea />;
  } else if (mode === "cards") {
    return <CardArea />;
  } else {
    return <h1>Invalid mode</h1>;
  }
}

export default Content;

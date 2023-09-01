import {useState} from "react";
import GameArea from "./GameArea";
import CardArea from "./CardArea";
import Button from "../../controls/Button.tsx";

function Content() {
    const [mode, setMode] = useState<string>("cards");

    const toggleMode = () => {
        setMode(prevMode => (prevMode === "game" ? "cards" : "game"));
        console.log(mode);
    };

    return (
        <div>
            <Button
                onClick={toggleMode}>Toggle View
            </Button>
            {mode === "game" ? <GameArea/> : <CardArea/>}
        </div>
    );
}

export default Content;

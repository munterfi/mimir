import {Column, Header} from "./Navbar.styles.ts";
import headerImage from "../../assets/rocket.svg";
import Button from "../../controls/Button.tsx";
import HeaderLabel from "../../controls/HeaderLabel.tsx";
import {useState} from "react";
import GameArea from "./GameArea.tsx";
import CardArea from "./CardArea.tsx";


{/*<Button
                onClick={toggleMode}>Toggle View
            </Button>
            {mode === "game" ? <GameArea/> : <CardArea/>}*/
}

function Navbar() {
    const [mode, setMode] = useState<string>("cards");

    const toggleMode = () => {
        setMode(prevMode => (prevMode === "game" ? "cards" : "game"));
        console.log(mode);
    };

    return (
        <div>
            <Header>
                <Column textAlign={'left'}>
                    <HeaderLabel text={'Mimir'} logoPath={headerImage}/>
                </Column>
                <Column textAlign={'center'}>
                    <Button onClick={() => console.log("header button clicked")}
                            buttonColor={'green'}
                            children={'New Game'}/>
                </Column>
                <Column textAlign={'right'}>
                    <Button onClick={toggleMode}
                            buttonColor={'white'}
                            buttonBackgroundColor={'black'}
                            buttonBorder={'none'}
                            children={'Manage Cards'}/>
                </Column>
            </Header>
            {mode === "game" ? <GameArea/> : <CardArea/>}
        </div>

    );
}

export default Navbar;

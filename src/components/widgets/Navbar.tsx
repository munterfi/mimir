import {Column, Header} from "./Navbar.styles.ts";
import headerImage from "../../assets/rocket.svg";
import Button from "../../controls/Button.tsx";
import HeaderLabel from "../../controls/HeaderLabel.tsx";

function Navbar() {
    return (
        <div>
            <Header>
                <Column textAlign={'left'}>
                    <HeaderLabel text={'Flashcards'} logoPath={headerImage}/>
                </Column>
                <Column textAlign={'center'}>
                <Button onClick={() => console.log("header button clicked")} buttonColor={'green'} children={'New Game'}/>
                </Column>
                <Column textAlign={'right'}>
                    Hello World
                </Column>
            </Header>
        </div>

    );
}

export default Navbar;

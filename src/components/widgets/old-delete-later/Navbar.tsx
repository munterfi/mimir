import {Column, Header} from "./Navbar.styles.ts";
import headerImage from "../../../assets/rocket.svg";
import Button from "../../../controls/Button.tsx";
import HeaderLabel from "../../../controls/HeaderLabel.tsx";
import {Link} from "react-router-dom";


function Navbar() {

    return (
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
                    <Link to="/api/cards">Liste</Link>
                </Column>
            </Header>

    );
}

export default Navbar;

import {Header} from "./Navbar.styles.ts";
import headerImage from "../../assets/rocket.svg";

function Navbar() {
    return (
        <div>
            <Header>Navbar
                <img src={headerImage} alt="headerImage"/></Header>
        </div>
    );
}

export default Navbar;

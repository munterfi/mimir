import {MegaButton} from "./Button.styles.ts";
import {ButtonProps} from "../interfaces/ButtonProps.ts";

function Button(props: ButtonProps) {
    return (
        <MegaButton onClick={props.onClick} className={`toggle-button ${props.buttonType}`}>
            {props.children}
        </MegaButton>
    );

}

export default Button;
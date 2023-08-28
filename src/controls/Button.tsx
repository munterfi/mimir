import {CustomButton} from "./Button.styles.ts";
import {ButtonProps} from "../interfaces/ButtonProps.ts";

function Button(props: ButtonProps) {
    return (
        <CustomButton onClick={props.onClick} className={`toggle-button ${props.buttonType}`}>
            {props.children}
        </CustomButton>
    );

}

export default Button;
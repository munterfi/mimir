import {ToggleViewButton} from "./Button.styles.ts";
import React from "react";

export interface ButtonProps {
    onClick: () => void;
    buttonColor?: string;
    children: React.ReactNode;
}

function Button(props: ButtonProps) {
    return (
        <ToggleViewButton onClick={props.onClick} color={props.buttonColor}>
            {props.children}
        </ToggleViewButton>
    );

}

export default Button;
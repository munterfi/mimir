import {ToggleViewButton} from "./Button.styles.ts";
import React from "react";

export interface ButtonProps {
    onClick: () => void;
    buttonColor?: string;
    buttonBackgroundColor?: string;
    buttonBorder?: string;
    children: React.ReactNode;
}

function Button(props: ButtonProps) {
    return (
        <ToggleViewButton onClick={props.onClick}
                          color={props.buttonColor}
                          background={props.buttonBackgroundColor}
                          border={props.buttonBorder}
        >
            {props.children}
        </ToggleViewButton>
    );

}

export default Button;
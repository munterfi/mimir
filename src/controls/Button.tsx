import React from "react";
import {MegaButton} from "./Button.styles.ts";

interface ButtonProps {
    onClick: () => void;
    buttonType: "edit" | "delete" | "add" | "switch_view" | "default";
    children: React.ReactNode;
}

function Button(props: ButtonProps) {
    return (
            <MegaButton onClick={props.onClick} className={`toggle-button ${props.buttonType}`}>
                {props.children}
            </MegaButton>
    );

}

export default Button;
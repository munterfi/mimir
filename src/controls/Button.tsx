import React from "react";

interface ButtonProps {
    onClick: () => void;
    buttonType: "edit" | "delete" | "add";
    children: React.ReactNode;
}

function Button(props: ButtonProps) {
    return <button onClick={props.onClick} className={props.buttonType}>
        {props.children}
    </button>;
}

export default Button;
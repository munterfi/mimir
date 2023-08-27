import React from "react";

export interface ButtonProps {
    onClick: () => void;
    buttonType: "edit" | "delete" | "add" | "switch_view" | "default";
    children: React.ReactNode;
}
import {Card} from "../interfaces/Card.ts";

// fetch Cards
export const fetchCards = async (): Promise<Card[]> => {
    const response = await fetch("/api/cards");
    const dto = await response.json();
    if (response.ok) {
        return dto;
    }
    return [];
};

// add new Card
export const addCard = async (cardData: Card): Promise<Card> => {
    const response = await fetch("/api/cards", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData),
    });
    const dto = await response.json();
    if (response.ok) {
        return dto;
    }
    throw new Error("Failed to add a new card");
};
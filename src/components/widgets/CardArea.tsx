import {useEffect, useState} from "react";
import {fetchCards} from "../../models/Api.ts";
import {Container, Table, TD, TH, THead, TR} from "./CardArea.styles.ts";
import {Card} from "../../interfaces/Card.ts";
import {Link} from "react-router-dom";


function CardArea() {
    const [cards, setCards] = useState<Card[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        (async () => {
            const response = await fetchCards();
            if (response.length !== 0) {
                setCards(response);
            } else {
                setError(new Error("No cards available"));
            }
        })();
    }, []);

    if (cards.length === 0) {
        return <div>No Cards available - {error?.message}</div>;
    } else {
        return (
            <Container>
                <Table>
                    <THead>
                        <TR>
                            <TH>Front</TH>
                            <TH>Back</TH>
                        </TR>
                    </THead>
                    <tbody>
                    {cards.map((card) => {
                        return (
                            <TR key={card.id}>
                                <TD>{card.front}</TD>
                                <TD>{card.back}</TD>
                                <TD>
                                    <div>
                                        <Link key={card.id} to={`/edit/${card.id}`}>
                                            {card.id}
                                        </Link>
                                    </div>
                                </TD>
                            </TR>
                        );
                    })}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default CardArea;


import { Route, Routes} from 'react-router-dom'
import {Layout} from "./Layout.tsx";
import GameArea from "../widgets/GameArea.tsx";
import CardArea from "../widgets/CardArea.tsx";
import {Edit} from "../widgets/Edit.tsx";
import {Card} from "../widgets/Card.tsx";



function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<GameArea />} />
                <Route path={"/api/cards"} element={<CardArea />} />
                <Route path="edit" element={<Edit />}>
                    <Route path=":id" element={<Card />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;



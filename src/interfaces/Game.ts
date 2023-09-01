import {Result} from "./Result.ts";

export interface Game {
    front: string;
    cardCount: number;
    solved: Result[];
}

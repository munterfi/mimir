import { Card } from "./Card";
import { Game } from "./Game";

export interface ApiState {
  cards: Card[];
  game?: Game;
}

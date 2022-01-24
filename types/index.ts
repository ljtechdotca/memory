import { Card } from "@components";

export interface Game {
  board: Card[];
  matched: number;
  moves: number;
  pair: Card[];
  start: number;
}

import { Game } from "@types";

export const INIT_GAME: Game = {
  board: [],
  matched: 0,
  moves: 0,
  pair: [],
  start: new Date().getTime(),
};

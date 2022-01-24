import { Game } from "@types";
import { createContext, Dispatch } from "react";

export const GameContext = createContext<{
  game: Game | null;
  setGame: Dispatch<Game | null>;
}>({ game: null, setGame: () => {} });

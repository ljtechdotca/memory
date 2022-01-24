import { Card, Header, Menu, Score } from "@components";
import { GameContext } from "@lib/context";
import { Game } from "@types";
import { useContext } from "react";
import styles from "./Board.module.scss";

const check = (a: Card, b: Card) => {
  if (a.value === b.value) {
    return true;
  } else {
    return false;
  }
};

export interface BoardProps {}

export const Board = ({}: BoardProps) => {
  const { game, setGame } = useContext(GameContext);

  const handleCard = (card: Card) => {
    if (game) {
      const newGame: Game = { ...game };
      const newBoard = game.board;
      const clear = () => {
        newBoard[newGame.pair[0].index].active = false;
        newBoard[newGame.pair[1].index].active = false;
        newGame.pair = [];
        newGame.board = newBoard;
        setGame(newGame);
      };
      newBoard[card.index].active = true;
      newGame.pair.push(card);
      if (newGame.pair.length === 2) {
        newGame.moves += 1;
        if (check(newGame.pair[0], newGame.pair[1])) {
          newGame.matched += 1;
          newBoard[newGame.pair[0].index].active = true;
          newBoard[newGame.pair[1].index].active = true;
          newGame.pair = [];
          newGame.board = newBoard;
          setGame(newGame);
        } else {
          setTimeout(() => {
            clear();
          }, 1000);
        }
      } else {
        newGame.board = newBoard;
        setGame(newGame);
      }
    }
  };

  return (
    <div className={styles.root}>
      <Header />
      <Score />
      <div className={styles.container}>
        {game &&
          game.board &&
          game.board.map((card) => (
            <Card key={card.id} onCardEvent={handleCard} {...card} />
          ))}
      </div>
      <Menu />
    </div>
  );
};

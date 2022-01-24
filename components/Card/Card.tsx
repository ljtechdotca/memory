import { GameContext } from "@lib/context";
import React, { useContext } from "react";
import styles from "./Card.module.scss";

export interface Card {
  id: string;
  active: boolean;
  emoji: string;
  index: number;
  sort: number;
  value: string;
}

export interface CardProps extends Card {
  id: string;
  active: boolean;
  emoji: string;
  index: number;
  sort: number;
  value: string;
  onCardEvent: (card: Card) => any;
}

export const Card = ({
  id,
  active,
  index,
  sort,
  value,
  emoji,
  onCardEvent,
}: CardProps) => {
  const { game, setGame } = useContext(GameContext);

  const handleCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (game) {
      const newCard: Card = {
        id,
        active,
        index,
        sort,
        value,
        emoji,
      };
      const newGame = { ...game };
      const newBoard = newGame.board;
      newBoard[index].active = true;
      newGame.board = newBoard;
      setGame(newGame);
      onCardEvent(newCard);
    }
  };

  return (
    <div className={styles.root}>
      {game && game.board[index].active ? (
        <div className={styles.container__active}>{emoji}</div>
      ) : (
        <button
          className={styles.container}
          onClick={game && game.pair.length !== 2 ? handleCard : () => {}}
        />
      )}
    </div>
  );
};

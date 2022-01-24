import { createBoard } from "@lib/constants";
import { INIT_GAME } from "@lib/constants/game";
import { GameContext } from "@lib/context";
import { useContext } from "react";
import styles from "./Menu.module.scss";

export interface MenuProps {}

export const Menu = ({}: MenuProps) => {
  const { game, setGame } = useContext(GameContext);

  const handleMenu = () => {
    setGame({
      ...INIT_GAME,
      board: createBoard(),
      pair: [],
      start: new Date().getTime(),
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {game ? (
          <button className={styles.button__grey} onClick={handleMenu}>
            Reset game
          </button>
        ) : (
          <button className={styles.button__purple} onClick={handleMenu}>
            Start game
          </button>
        )}
      </div>
    </div>
  );
};

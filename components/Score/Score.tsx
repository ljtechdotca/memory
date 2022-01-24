import { GameContext } from "@lib/context";
import { useContext } from "react";
import styles from "./Score.module.scss";

export interface ScoreProps {}

export const Score = () => {
  const { game, setGame } = useContext(GameContext);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.item}>
          <span className={styles.title}>Pairs matched</span>
          <span>
            <b className={styles.bold}>{game ? game.matched : 0}</b>/8
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>Total moves</span>
          <span>
            <b className={styles.bold}>{game ? game.moves : 0}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

import { GameContext } from "@lib/context";
import { useContext, useEffect, useState } from "react";
import styles from "./Header.module.scss";

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const { game, setGame } = useContext(GameContext);
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().getTime());
    });
    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentTime: number = game ? (time - game.start) / 1000 : 0;

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Match the pairs 🤔</h1>
      {game && (
        <span className={styles.container}>
          {currentTime > 0 && currentTime.toFixed(2)}s
        </span>
      )}
    </div>
  );
};

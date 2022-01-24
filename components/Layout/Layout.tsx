import { Meta } from "@components";
import { GameContext } from "@lib/context";
import { Game } from "@types";
import { useState } from "react";
import styles from "./Layout.module.scss";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [game, setGame] = useState<Game | null>(null);

  return (
    <GameContext.Provider value={{ game, setGame }}>
      <div className={styles.root}>
        <Meta />
        <main className={styles.container}>{children}</main>
      </div>
    </GameContext.Provider>
  );
};

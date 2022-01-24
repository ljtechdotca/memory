import { Board } from "@components";
import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Board />
      </div>
    </div>
  );
};

export default Home;

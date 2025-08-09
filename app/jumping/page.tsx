"use client";

import SideBar from "../sidebar";
import styles from "../page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <SideBar />
      <main className={styles.main}>
        <h1 style={{ fontSize: 22 }}>
          Welcome to the <code className={styles.code}>Jumping</code> page!
        </h1>
        <h2 style={{ fontSize: 17 }}>
          Here are some <code className={styles.code}>cool</code> jumping
          related stats!
        </h2>

        <h2 style={{ fontSize: 17 }}>
          My vertical: <code className={styles.code}>22.5</code>
        </h2>

        <h2 style={{ fontSize: 17 }}>
          Average NBA players vertical: <code className={styles.code}>40</code>
        </h2>

        <h2 style={{ fontSize: 17 }}>
          World record vertical: <code className={styles.code}>51</code>
        </h2>
      </main>
    </div>
  );
}

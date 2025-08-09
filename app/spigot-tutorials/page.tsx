"use client";

import SideBar from "../sidebar";
import styles from "../page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <SideBar />
      <main className={styles.main}>
        <h1 style={{ fontSize: 22 }}>
          Welcome to the <code className={styles.code}>Spigot Tutorials</code>{" "}
          page!
        </h1>
        <h2 style={{ fontSize: 17 }}>
          Here are some of my <code className={styles.code}>cool</code>{" "}
          tutorials!
        </h2>

        <button
          onClick={() =>
            (window.location.href =
              "https://www.spigotmc.org/threads/1-21-6-1-21-8-understanding-registries-and-registering-to-them.707572/")
          }
          className={styles.button}
        >
          Registries, how they work and how to use them.
        </button>
      </main>
    </div>
  );
}

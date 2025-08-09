"use client";

import SideBar from "../sidebar";
import styles from "../page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <SideBar />
      <main className={styles.main}>
        <h1 style={{ fontSize: 22 }}>
          Welcome to the <code className={styles.code}>Spigot Plugins</code>{" "}
          page!
        </h1>
        <h2 style={{ fontSize: 17 }}>
          Here are some of my <code className={styles.code}>cool</code> plugins!
        </h2>

        <button
          onClick={() =>
            (window.location.href =
              "https://www.spigotmc.org/resources/%E2%AD%90-decorative-npcs-%E2%AD%90-1-21-6-1-21-8.123305/")
          }
          className={styles.button}
        >
          Decorative NPCs
        </button>

        <button
          onClick={() =>
            (window.location.href =
              "https://www.spigotmc.org/resources/%EF%B8%8F%EF%B8%8F%EF%B8%8F%EF%B8%8Fregistry-register%E2%AD%901-21-6-1-21-8%E2%AD%90add-custom-things-on-the-fly.127680/")
          }
          className={styles.button}
        >
          Registry Register
        </button>

        <button
          onClick={() =>
            (window.location.href =
              "https://www.spigotmc.org/resources/circuit-cars-%E2%AD%90-1-21-6-1-21-8-50-off-sale.126019/")
          }
          className={styles.button}
        >
          Circuit cars ($1.99)
        </button>

        <button
          onClick={() =>
            (window.location.href =
              "https://www.spigotmc.org/resources/%E2%AD%90dancing-giants-%E2%9C%A8-giant-plugin-%E2%9C%A8-family-update-1-21-1-1-21-4-and-1-21-5-1-21-8.124326/")
          }
          className={styles.button}
        >
          Dancing Giants ($1.99)
        </button>
      </main>
    </div>
  );
}

"use client";

import SideBar from "../sidebar";
import styles from "../page.module.css";
import { getTotalDownloads } from "../downloads";
import { useEffect, useState } from "react";

export default function Home() {
  const [downloads, setDownloads] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const d = await getTotalDownloads();
      setDownloads(d);
    })();
  }, []);

  return (
    <div className={styles.page}>
      <SideBar />
      <main className={styles.main}>
        <h1 style={{ fontSize: 22 }}>
          Welcome to the <code className={styles.code}>Spigot</code> page!
        </h1>
        <h2 style={{ fontSize: 17 }}>
          Here are some <code className={styles.code}>cool</code> spigot
          related things!
        </h2>

        <h2
          onClick={() =>
            (window.location.href =
              "https://www.spigotmc.org/resources/authors/circuitboard.2210504/")
          }
          style={{ fontSize: 17, cursor: "pointer" }}
        >
          My profile.
        </h2>
        <h2 style={{ fontSize: 17 }}>My downloads: {downloads}</h2>
      </main>
    </div>
  );
}

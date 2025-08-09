"use client";

import { useEffect, useState } from "react";
import SideBar from "../sidebar";
import styles from "../page.module.css";
import { getDownloads } from "../downloads";

const resourceIds = {
  decorativeNpc: 123305,
  registryRegister: 127680,
  circuitCars: 126019,
  dancingGiants: 124326,
};

export default function Home() {
  const [downloads, setDownloads] = useState({
    decorativeNpc: 0,
    registryRegister: 0,
    circuitCars: 0,
    dancingGiants: 0,
  });

  useEffect(() => {
    async function fetchDownloads() {
      const decorativeNpc = await getDownloads(resourceIds.decorativeNpc);
      const registryRegister = await getDownloads(resourceIds.registryRegister);
      const circuitCars = await getDownloads(resourceIds.circuitCars);
      const dancingGiants = await getDownloads(resourceIds.dancingGiants);

      setDownloads({
        decorativeNpc,
        registryRegister,
        circuitCars,
        dancingGiants,
      });
    }

    fetchDownloads();
  }, []);

  return (
    <div className={styles.page}>
      <SideBar />
      <main className={styles.main}>
        <h1 style={{ fontSize: 22 }}>
          Welcome to the <code className={styles.code}>Spigot Plugins</code> page!
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
          <br />
          Downloads: {downloads.decorativeNpc.toLocaleString()}
        </button>

        <button
          onClick={() =>
            (window.location.href =
              "https://www.spigotmc.org/resources/%EF%B8%8F%EF%B8%8F%EF%B8%8F%EF%B8%8Fregistry-register%E2%AD%901-21-6-1-21-8%E2%AD%90add-custom-things-on-the-fly.127680/")
          }
          className={styles.button}
        >
          Registry Register
          <br />
          Downloads: {downloads.registryRegister.toLocaleString()}
        </button>

        <button
          onClick={() =>
            (window.location.href =
              "https://www.spigotmc.org/resources/circuit-cars-%E2%AD%90-1-21-6-1-21-8-50-off-sale.126019/")
          }
          className={styles.button}
        >
          Circuit Cars ($1.99)
          <br />
          Downloads: {downloads.circuitCars.toLocaleString()}
        </button>

        <button
          onClick={() =>
            (window.location.href =
              "https://www.spigotmc.org/resources/%E2%AD%90dancing-giants-%E2%9C%A8-giant-plugin-%E2%9C%A8-family-update-1-21-1-1-21-4-and-1-21-5-1-21-8.124326/")
          }
          className={styles.button}
        >
          Dancing Giants ($1.99)
          <br />
          Downloads: {downloads.dancingGiants.toLocaleString()}
        </button>
      </main>
    </div>
  );
}

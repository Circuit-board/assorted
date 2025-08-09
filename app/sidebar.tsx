"use client";

import styles from "./page.module.css";

export default function SideBar() {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        alignItems: "center",
        height: "80vh",
        width: 200,
        border: "1px solid black",
        left: 10,
        backgroundColor: "#fff",
        gap: 10,
      }}
    >
      <img
        style={{ cursor: "pointer" }}
        onClick={() => (window.location.href = "/")}
        src={"/assorted.png"}
      />

      <div style={{ marginBottom: 10, marginTop: 10 }} />

      <button
        onClick={() => (window.location.href = "/spigot-plugins")}
        className={styles.button}
      >
        Spigot Plugins
      </button>

      <button
        onClick={() => (window.location.href = "/spigot-tutorials")}
        className={styles.button}
      >
        Spigot Tutorials
      </button>

      <button
        onClick={() => (window.location.href = "/jumping")}
        className={styles.button}
      >
        Jumping
      </button>
    </div>
  );
}

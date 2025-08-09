import SideBar from "./sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <SideBar />
      <main className={styles.main}>
        <h1>
          Welcome to <code className={styles.code}>assorted.io</code>!
        </h1>
        <h2 style={{ fontSize: 17 }}>
          This page is a corner of the internet,
          <br />
          where I show some of the <code className={styles.code}>
            cool
          </code>{" "}
          things I do.
        </h2>
      </main>
    </div>
  );
}

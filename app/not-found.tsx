import SideBar from "./sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <SideBar />
      <main className={styles.main}>
        <h1 style={{ fontSize: 20 }}>
          Uh oh, You have discovered a <code className={styles.code}>404</code>{" "}
          error!
        </h1>
      </main>
    </div>
  );
}

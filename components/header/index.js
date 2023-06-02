import NavBar from "./navbar";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>MOVIER</h1>
      <NavBar />
    </header>
  );
}

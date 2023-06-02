import NavBar from "./navbar";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        MOVIER
      </Link>
      <NavBar />
    </header>
  );
}

import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.logo} href="/">
        MOVIER
      </Link>
      <div className={styles.footerItem}>
        <h3>Pages</h3>
        <Link href="/">Home Page</Link>
        <Link href="/trending">Trending</Link>
        <Link href="/user">User</Link>
      </div>
      <div className={styles.footerItem}>
        <h3>Communication</h3>
        <Link target="_blank" href="https://github.com/alirdurak">
          Github
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/alir%C4%B1zadurak/"
        >
          Linkedin
        </Link>
      </div>
    </footer>
  );
}

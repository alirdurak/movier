import styles from "./styles.module.css";
import Link from "next/link";
import SearchInput from "@/components/search-input";
import { FaRegUser } from "react-icons/fa";
export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <SearchInput />
      <Link href="/" className={styles.navItem}>
        Home
      </Link>
      <Link href="/trending" className={styles.navItem}>
        Trending
      </Link>
      <Link href="/user">
        <FaRegUser className={styles.user} />
      </Link>
    </nav>
  );
}

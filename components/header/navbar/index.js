import styles from "./styles.module.css";
import SearchInput from "@/components/search-input";
import { FaRegUser } from "react-icons/fa";
export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <SearchInput />
      <span className={styles.navItem}>Home</span>
      <span className={styles.navItem}>Trending</span>
      <FaRegUser className={styles.user} />
    </nav>
  );
}

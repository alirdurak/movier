"use client";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import SearchInput from "@/components/search-input";
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { out } from "@/services/firebase";
import Link from "next/link";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function NavBar() {
  const router = useRouter();
  const user = useSelector((state) => state.authSlice.value);
  const handleClick = () => {
    out();

    console.log;
  };

  return (
    <nav className={styles.navBar}>
      <SearchInput />
      <Link href="/" className={styles.navItem}>
        Home
      </Link>
      <Link href="/trending" className={styles.navItem}>
        Trending
      </Link>

      {/* Kullanıcı oturum açmışsa çıkış ikonunu göster */}
      {user != null ? (
        <button onClick={handleClick}>
          <FaSignOutAlt className={styles.user} />
        </button>
      ) : null}

      {/* Kullanıcı oturum açmamışsa kullanıcı ikonunu göster */}
      {user == null ? (
        <button
          onClick={() => {
            router.push("/user");
          }}
        >
          <FaRegUser className={styles.user} />
        </button>
      ) : null}
    </nav>
  );
}

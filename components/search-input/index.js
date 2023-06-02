"use client";
import styles from "./styles.module.css";

import { CgSearch } from "react-icons/cg";
export default function SearchInput() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.search}>
      <input type="text" placeholder="Search..." className={styles.input} />
      <button type="submit" className={styles.icon}>
        <CgSearch />
      </button>
    </form>
  );
}

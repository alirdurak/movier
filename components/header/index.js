"use client";
import NavBar from "./navbar";
import styles from "./styles.module.css";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function Header() {
  return (
    <header className={styles.header}>
      <Toaster></Toaster>
      <Link href="/" className={styles.logo}>
        MOVIER
      </Link>
      <NavBar />
    </header>
  );
}

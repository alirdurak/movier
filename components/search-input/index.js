"use client";
import styles from "./styles.module.css";
import { search } from "@/services/movies";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { change, updateData } from "@/redux/slices/search-slice";
import { useRouter } from "next/navigation";

import { CgSearch } from "react-icons/cg";
export default function SearchInput() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(change(e.target.value));
    console.log(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await search(value);
    dispatch(updateData(data.results));
    router.push("/search");
    setValue("");
    console.log(data);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.search}>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Search..."
        className={styles.input}
        value={value}
      />
      <button type="submit" className={styles.icon}>
        <CgSearch />
      </button>
    </form>
  );
}

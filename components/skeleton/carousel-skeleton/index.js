"use client";
import CardSkeleton from "../card-skeleton";
import { useState, useRef } from "react";
import styles from "./styles.module.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const movies = [0, 1, 2, 3, 4, 5];
export default function CarouselSkeleton({ title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const handleNext = () => {
    if (currentIndex < movies.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-10">
      <h1 className="text-title-gray font-bold text-lg relative cursor-pointer pb-3 ml-20 w-56 ">
        {title}
      </h1>
      <div className={styles.container}>
        <div onClick={handlePrev} className={styles.arrow}>
          <MdArrowBackIosNew />
        </div>
        <div ref={carouselRef} className={styles.slider}>
          {movies.map((i) => {
            return <CardSkeleton key={i} />;
          })}
        </div>
        <div onClick={handleNext} className={styles.arrow}>
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import MovieCard from "../card-crousel/movie-card";

export default function TrendSection({ data = null, header, setData, page }) {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const setPage = (i) => {
    setData(i);
  };

  return (
    <div className="flex flex-col items-center m-7 gap-4 min-h-[600px] ">
      <h2 className=" text-title-gray text-2xl justify-self-start ">
        {header}
      </h2>
      <div className="flex  gap-5 flex-wrap   w-full  ">
        {data.map((i) => {
          return (
            <div key={i.id}>
              <MovieCard movie={i} />
            </div>
          );
        })}
      </div>
      <div className="flex gap-5 text-xl text-orange-light">
        {list.map((i) => (
          <div
            onClick={() => setPage(i)}
            className={`cursor-pointer p-4 rounded-full hover:bg-content-gray ${
              page == i && "bg-content-gray"
            }`}
            key={i}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

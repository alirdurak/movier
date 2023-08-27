"use client";
import { useSelector } from "react-redux/es/hooks/useSelector";
import MovieCard from "@/components/card-crousel/movie-card";
export default function SearchContainer() {
  const data = useSelector((state) => state.searchSlice.data);
  if (data.length < 1) {
    return <h1 className="text-orange-light">No data found!!</h1>;
  } else {
    return (
      <div className="flex flex-wrap gap-8 h-screen">
        {data.map((i) => {
          return (
            <div key={i.id}>
              <MovieCard movie={i} />
            </div>
          );
        })}
      </div>
    );
  }
}

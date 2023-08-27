"use client";

import TrendSection from "@/components/trend-section";
import { popularMovies, popularSeries } from "@/services/movies";
import { useState, useEffect } from "react";

export default function TrendPage() {
  const [moviePage, setMoviePage] = useState(1);
  const [seriesPage, setSeriesPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await popularMovies(moviePage);
      setMovies(data.results);
    };
    fetchMovies();
  }, [moviePage]);

  useEffect(() => {
    const fetchSeries = async () => {
      const data = await popularSeries(seriesPage);
      setSeries(data.results);
    };
    fetchSeries();
  }, [seriesPage]);

  return (
    <div className="flex w-full flex-wrap gap-y-10">
      <div>
        <TrendSection
          setData={setMoviePage}
          header="Popular Movies"
          data={movies}
          page={moviePage}
        />
      </div>
      <div>
        <TrendSection
          setData={setSeriesPage}
          header="Popular Series"
          data={series}
          page={seriesPage}
        />
      </div>
    </div>
  );
}

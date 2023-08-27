"use client";
import Image from "next/image";
import CardSkeleton from "../skeleton/card-skeleton";
import { useRouter } from "next/navigation";

export default function MovieCard({ movie = null }) {
  const router = useRouter();

  if (movie === null) {
    return <CardSkeleton />;
  } else {
    return (
      <Image
        className="cursor-pointer hover:scale-110  transition-all rounded-lg "
        alt={movie.title}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        width={175}
        height={150}
        onClick={() => router.push("./movies/" + movie.id)}
      />
    );
  }
}

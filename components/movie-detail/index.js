import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
export default function MovieDetail({ movie, learnMore = null }) {
  return (
    <div className="mb-11">
      <div className="pt-56 relative z-10">
        <h1 className="text-title-gray text-4xl font-bold">
          {movie.original_title}
        </h1>
        <div className="flex gap-4 mt-5 items-center">
          <span className="text-orange-light flex items-center gap-2">
            {movie.vote_average} <AiFillStar />
          </span>
          <h3 className="text-content-gray font-normal text-sm ">
            {movie.release_date}
          </h3>
        </div>
        <div className="mt-4">
          <h3 className="text-orange-light text-lg font-bold">Overview</h3>
          <p className="text-title-gray text-base ">{movie.overview}</p>
        </div>
        {learnMore !== null && (
          <Link href={`/movies/${movie.id}`}>
            <h2 className="text-orange-light text-lg font-bold mt-2 cursor-pointer w-32">
              Learn More...
            </h2>
          </Link>
        )}
      </div>
      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-background-black from-10%  via-background-black/70 via-60% to-background-black/40 to-90%   ">
        <Image
          alt={movie.original_title}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          className="absolute h-auto max-h-full object-cover -z-50"
          fill
          unoptimized
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
export default function MovieDetail({
  release = null,
  title = null,
  rating = null,
  description = null,
  poster = null,
  learnMore = null,
}) {
  return (
    <div>
      <div className="pt-56 absolute z-10">
        <h1 className="text-title-gray text-4xl font-bold">{title} </h1>
        <div className="flex gap-4 mt-5 items-center">
          <span className="text-orange-light flex items-center gap-2">
            {rating} <AiFillStar />{" "}
          </span>
          <h3 className="text-content-gray font-normal text-sm ">{release}</h3>
        </div>
        <div className="mt-4">
          <h3 className="text-orange-light text-lg font-bold">Overview</h3>
          <p className="text-title-gray text-base ">{description}</p>
        </div>
        {learnMore !== null && (
          <h2 className="text-orange-light text-lg font-bold mt-2 cursor-pointer w-32">
            Learn More...
          </h2>
        )}
      </div>
      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-background-black from-10%  via-background-black/70 via-60% to-background-black/40 to-90%   ">
        <Image
          alt={title}
          src={`https://image.tmdb.org/t/p/original${poster}`}
          className="absolute h-auto max-h-full object-cover -z-50"
          fill
          unoptimized
        />
      </div>
    </div>
  );
}

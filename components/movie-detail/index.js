import Image from "next/image";
export default function MovieDetail({
  release = null,
  title = null,
  rating = null,
  description = null,
  poster = null,
  length = null,
}) {
  return (
    <div>
      <h3 className="text-content-gray">{release}</h3>
      <h1 className="text-title-gray">{title} </h1>
      <div>
        <span className="text-orange-light">{rating}</span>
        <span className="text-content-gray">{length}</span>
      </div>
      <div>
        <h3 className="text-orange-light">Overview</h3>
        <p className="text-content-gray">{description}</p>
      </div>
      <h2>Learn More</h2>
      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-background-black from-10%  via-background-black/70 via-60% to-background-black/20 to-90% -z-1  ">
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

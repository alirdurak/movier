import CarouselSkeleton from "@/components/skeleton/carousel-skeleton";
import MovieDetailSkeleton from "@/components/skeleton/movie-detail-skeleton";

export default function Loading() {
  return (
    <div>
      <MovieDetailSkeleton />
      <div className="ml-24 p-10">
        <CarouselSkeleton title="Popular Movies" />
        <CarouselSkeleton title="Popular Tv Series" />
        <CarouselSkeleton title="Popular Shows" />
      </div>
    </div>
  );
}

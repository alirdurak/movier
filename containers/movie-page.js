import { findByID, upcomingMovies } from "@/services/movies";
import MovieDetail from "@/components/movie-detail";
import CarouselContainer from "@/components/card-crousel";

export default async function MovieContainer({ id }) {
  const movie = await findByID(id);
  const upcoming = await upcomingMovies(1);
  return (
    <div>
      <MovieDetail movie={movie} />
      <CarouselContainer title="Upcoming" movies={upcoming.results} />
    </div>
  );
}

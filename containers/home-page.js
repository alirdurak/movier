import MovieDetail from "@/components/movie-detail";
import { popularMovies } from "@/services/movies";
export default async function HomePageContainer() {
  const data = await popularMovies(1);
  return (
    <MovieDetail
      release={data.results[2].release_date}
      title={data.results[2].original_title}
      rating={data.results[2].vote_average}
      description={data.results[2].overview}
      poster={data.results[2].poster_path}
    />
  );
}

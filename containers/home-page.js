import MovieDetail from "@/components/movie-detail";
import CarouselContainer from "@/components/card-crousel";
import {
  popularMovies,
  popularSeries,
  upcomingMovies,
} from "@/services/movies";
export default async function HomePageContainer() {
  const movieData = await popularMovies(1);
  const seriesData = await popularSeries(1);
  const upcomingData = await upcomingMovies(1);
  return (
    <fragment>
      <MovieDetail movie={movieData.results[1]} learnMore="true" />
      <div className="ml-24 p-10">
        <CarouselContainer title="Popular Movies" movies={movieData.results} />
        <CarouselContainer
          title="Popular Tv Series"
          movies={seriesData.results}
        />
        <CarouselContainer
          title="Upcoming Movies"
          movies={upcomingData.results}
        />
      </div>
    </fragment>
  );
}

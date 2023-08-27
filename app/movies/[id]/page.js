import MovieContainer from "@/containers/movie-page";
export default function MovieDetail({ params }) {
  const id = parseInt(params.id);

  return (
    <div>
      <MovieContainer id={id} />
    </div>
  );
}

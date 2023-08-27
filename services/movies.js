import axios from "axios";

const fetchMovies = async (endpoint, params) => {
  const options = {
    url: `https://api.themoviedb.org/3/${endpoint}`,
    params,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTk3NDcyYWU2ZWRjNmMyZThkYjg3MjE5NGRlMWJjNiIsInN1YiI6IjY0NzYzYzllNjc0M2ZhMDBjMjljMTI4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bzny0IfKy-7k-2MS186fdvQyaP7dXWOcsBtYIEvgOH4",
    },
  };
  try {
    const { data } = await axios(options);
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

const popularMovies = async (page) => {
  const data = await fetchMovies("movie/popular", {
    language: "en-US",
    page,
  });

  return data;
};
const popularSeries = async (page) => {
  const data = await fetchMovies("tv/popular", {
    language: "en-US",
    page,
  });

  return data;
};
const upcomingMovies = async (page) => {
  const data = await fetchMovies("movie/upcoming", {
    language: "en-US",
    page,
  });

  return data;
};
const findByID = async (movie_id) => {
  const data = await fetchMovies("movie/" + movie_id, {
    language: "en-US",
  });

  return data;
};
const search = async (query) => {
  const data = await fetchMovies("search/movie", {
    language: "en-US",
    query,
  });
  return data;
};

export { popularMovies, popularSeries, upcomingMovies, findByID, search };

import axios from "axios";

const fetchMovies = async (endpoint, params) => {
  const options = {
    url: `https://api.themoviedb.org/3/${endpoint}`,
    params,
    headers: {
      accept: "application/json",
      Authorization: process.env.AUTHORIZATION,
    },
  };
  try {
    const { data } = await axios(options);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const popularMovies = async (page) => {
  const data = await fetchMovies("movie/popular", {
    language: "en-US",
    page,
  });
  console.log(data);
};

export { popularMovies };

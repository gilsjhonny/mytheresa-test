import fetch from "cross-fetch";

export const fetchMovies = (genre) => async (dispatch, getState) => {
  console.log(genre);
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=57c98f3bc2b2cd4213729ff48dc9c3e2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16"
    );
    const json = await response.json();

    const movies = json.results.map((movie) => ({
      title: movie.title,
      release_date: movie.release_date,
      image_src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    }));
    dispatch(fetchSuccess(movies));
  } catch (error) {
    console.log(error);
    dispatch(fetchError(error));
  }
};

const fetchSuccess = (response) => {
  return {
    type: "FETCH_SUCCESS",
    payload: response,
  };
};

const fetchError = (error) => {
  return {
    type: "FETCH_ERROR",
    payload: error,
  };
};

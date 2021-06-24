import fetch from "cross-fetch";

export const FETCH_BEGIN = "FETCH_BEGIN";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchMoviesByGenre =
  (genres) => async (dispatch, getState) => {
    dispatch(fetchBegin());

    const urls = genres.map(
      (genreId) =>
        `https://api.themoviedb.org/3/discover/movie?api_key=57c98f3bc2b2cd4213729ff48dc9c3e2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
    );

    const fetchByGenre = async (url) => {
      try {
        debugger;
        const response = await fetch(url);
        const json = await response.json();

        const movies = json.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          release_date: movie.release_date,
          image_src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }));

        return movies;
      } catch (error) {}
    };

    try {
      const [animation, documentaries, fiction] = await Promise.all(
        urls.map(fetchByGenre)
      );
      dispatch(
        fetchSuccess({
          animation,
          documentaries,
          fiction,
        })
      );
    } catch (error) {}
  };

const fetchBegin = () => ({
  type: FETCH_BEGIN,
});

const fetchSuccess = (response) => {
  return {
    type: FETCH_SUCCESS,
    payload: response,
  };
};

const fetchError = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};

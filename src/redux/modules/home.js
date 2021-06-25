import fetch from "cross-fetch";

const initialState = {
  loaded: false,
};

// ACTIONS
export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

// REDUCER
export const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: false,
        movies: action.payload,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// ACTION CREATORS
const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN,
});

const fetchMoviesSuccess = (response) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: response,
});

const fetchMoviesError = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

// SIDE EFFECTS
export const fetchMovies = () => async (dispatch) => {
  dispatch(fetchMoviesBegin());

  const urls = [
    `https://api.themoviedb.org/3/movie/now_playing?api_key=57c98f3bc2b2cd4213729ff48dc9c3e2&language=en-US&page=1`,
    `https://api.themoviedb.org/3/movie/upcoming?api_key=57c98f3bc2b2cd4213729ff48dc9c3e2&language=en-US&page=1`,
    `https://api.themoviedb.org/3/movie/top_rated?api_key=57c98f3bc2b2cd4213729ff48dc9c3e2&language=en-US&page=1`,
  ];

  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();

      const movies = json.results.map((movie) => ({
        id: movie.id,
        backdrop_path: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        title: movie.title,
        release_date: movie.release_date,
        image_src: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
      }));
      return movies;
    } catch (error) {}
  };

  try {
    const r = await Promise.all(urls.map(fetchMovies));
    const [nowPlaying, upcoming, topRated] = r;
    dispatch(
      fetchMoviesSuccess({
        nowPlaying,
        upcoming,
        topRated,
      })
    );
  } catch (error) {
    dispatch(fetchMoviesError(error));
  }
};

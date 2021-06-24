export const fetchMoviesByGenre = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        topMoviesByGenres: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
};

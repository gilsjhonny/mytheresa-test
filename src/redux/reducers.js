export const fetchMovies = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        movies: action.payload,
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

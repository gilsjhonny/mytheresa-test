const initialState = {
  movies: {},
};

// ACTIONS
export const ADD_TO_WISHLIST = "ADD_T)_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_WISHLIST";

// REDUCER
export const wishlistReducer = (
  state = initialState,
  action = {}
) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        movies: {
          ...state.movies,
          [action.payload.id]: action.payload,
        },
      };
    case REMOVE_FROM_WISHLIST:
      const { [action.payload]: omit, ...restOfMovies } =
        state.movies;

      return {
        ...state,
        movies: restOfMovies,
      };
    default:
      return state;
  }
};

// ACTION CREATORS
export const addToWihslist = (movie) => ({
  type: ADD_TO_WISHLIST,
  payload: movie,
});

export const removeFromWishlist = (movieId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: movieId,
});

// SIDE EFFECTS

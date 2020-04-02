const moviesReducerDefaultState = {
  movies: []
};

export default (state = moviesReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_MOVIE_LIST":
      return {
        ...state,
        movies: [...action.movies]
      };
    default:
      return state;
  }
};

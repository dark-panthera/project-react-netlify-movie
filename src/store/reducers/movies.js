const moviesReducerDefaultState = {
  movies: [],
  genres: [],
  sortBy: "",
  text: "",
  totalPages: 1,
  currentPage: 1,
  disableNext: false,
  disablePrevious: true,
  genre: "",
  movieId: "",
  selectedMovie: undefined
};

export default (state = moviesReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_MOVIE_LIST": {
      const moviesData = action.movies;
      const movieList = moviesData.results;

      return {
        ...state,
        movies: [...movieList],
        totalPages: action.movies.total_pages
      };
    }
    case "SELECT_MOVIE_ID": {
      return {
        ...state,
        movieId: action.movieId
      };
    }
    case "SET_PREVIOUS": {
      let currentPage = state.currentPage;
      let disablePrevious = true;

      if (currentPage > 1) {
        disablePrevious = false;

        currentPage--;
      }

      return {
        ...state,
        currentPage,
        disablePrevious
      };
    }
    case "SET_NEXT": {
      let currentPage = state.currentPage;
      console.log(currentPage);
      let disableNext = true;
      let disablePrevious = true;

      if (currentPage < state.totalPages) {
        disableNext = false;
        currentPage++;
      }

      if (currentPage > 1) {
        disablePrevious = false;
      }

      return {
        ...state,
        currentPage,
        disableNext,
        disablePrevious
      };
    }
    case "SET_TEXT": {
      return {
        ...state,
        text: action.text
      };
    }
    case "SET_SORT": {
      return {
        ...state,
        sortBy: action.sortBy
      };
    }
    case "SET_GENRE": {
      return {
        ...state,
        genre: action.genre
      };
    }
    case "SET_GENRE_LIST": {
      const genreList = action.genres.genres;

      return {
        ...state,
        genres: [...genreList]
      };
    }
    case "GET_MOVIE_DETAILS": {
      const movie = action.movie;

      return {
        ...state,
        selectedMovie: movie
      };
    }
    default:
      return state;
  }
};

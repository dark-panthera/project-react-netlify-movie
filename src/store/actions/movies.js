import axios from "axios";

// -------------------------------------------
// Get Latest Movies
// -------------------------------------------
export const getLatestMovies = (movies) => ({
  type: "SET_MOVIE_LIST",
  movies
});

export const startGetLatestMovies = () => {
  return (dispatch, getState) => {
    const state = getState();
    let currentSize = state.movies.currentPage;

    if (currentSize === undefined) {
      currentSize = 1;
    }
    return axios
      .get(
        `https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=${process.env.MOVIE_API}&page=${currentSize}`
      )
      .then(list => {
        const movies =  list.data;

        dispatch(getLatestMovies(movies));
      });
  };
};

// -------------------------------------------
// Select Movie Id
// -------------------------------------------
export const selectMovieId = (movieId) => ({
  type: "SELECT_MOVIE_ID",
  movieId
});

// -------------------------------------------
// Get Movie Details
// -------------------------------------------
export const getMovieDetails = (movie) => ({
  type: "GET_MOVIE_DETAILS",
  movie
});

export const startGetMovieDetails = (movieId) => {
  return (dispatch, getState) => {
    const state = getState();

    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.MOVIE_API}&language=en-US`
      )
      .then(list => {
        const movie =  list.data;

        dispatch(getMovieDetails(movie));
      });
  };
};

// -------------------------------------------
// Pagination
// -------------------------------------------
export const setPrevious = () => ({
  type: "SET_PREVIOUS",
});

export const setNext = () => ({
  type: "SET_NEXT",
});

// -------------------------------------------
// Filters
// -------------------------------------------
export const setText = (text) => ({
  type: "SET_TEXT",
  text
});

export const setSort = (sortBy) => ({
  type: "SET_SORT",
  sortBy
});

export const setGenre = (genre) => ({
  type: "SET_GENRE",
  genre
});

// -------------------------------------------
// Get Genre List
// -------------------------------------------
export const getGenres = (genres) => ({
  type: "SET_GENRE_LIST",
  genres
});

export const startGetGenreList = () => {
  return (dispatch, getState) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIE_API}&language=en-US`
      )
      .then(list => {
        const genres =  list.data;

        dispatch(getGenres(genres));
      });
  };
};

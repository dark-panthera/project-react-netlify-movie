import axios from "axios";

export const getLatestMovies = () => ({
  type: "SET_MOVIE_LIST",
  movies
});

export const startGetLatestMovies = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return axios
      .get(
        `https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=939be648c60cb3df43265513d4d7027f`
      )
      .then(list => {
        const movies =  list.data;

        dispatch(getLatestMovies(movies));
      });
  };
};

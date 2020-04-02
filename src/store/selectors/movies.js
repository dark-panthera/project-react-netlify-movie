import moment from "moment";

export default (movies, { text, sortBy, genre }) => {
  return movies
    .filter(movie => {
      const textMatch = movie.title.toLowerCase().includes(text.toLowerCase());

      let genreMatch = true;

      if (genre) {
        genreMatch = movie.genre_ids.filter(x => x == +genre).length > 0;
      }
      
      return textMatch && genreMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return moment(a.release_date) < moment(b.createdAt) ? 1 : -1;
      } else if (sortBy === "name") {
        return a.title < b.title ? 1 : -1;
      }
    });
};

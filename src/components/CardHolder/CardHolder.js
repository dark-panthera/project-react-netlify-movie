import React, { Component } from "react";
import Card from "./Cards/Card";
import { connect } from "react-redux";
import { startGetLatestMovies } from "../../store/actions/movies";
import selectMovies from "../../store/selectors/movies";

class CardHolder extends Component {
  componentDidMount() {
    this.props.startGetLatestMovies();
  }

  render() {
    let movies = this.props.movies.map((movie, index) => {
      return (<Card movie={movie} key={index} />);
    });
    
    if (movies.length=== 0) {
        movies = (<h4 className="label">No Matching movies could be found!</h4>)
    }
    return (
      <div className="cardholder">
        {movies}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  movies: selectMovies(state.movies.movies, state.movies, state.genre)
});

const mapDispatchToProps = dispatch => ({
  startGetLatestMovies: () => dispatch(startGetLatestMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardHolder);

import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startGetMovieDetails, selectMovieId } from "../../store/actions/movies";

class View extends Component {
  componentWillMount() {
    // console.log(this.props.match.params.id);
    // this.props.selectMovieId(this.props.match.params.id);

    this.props.startGetMovieDetails(this.props.match.params.id);
  }

  render() {
    if (this.props.movie) {
      return (
        <div>
          <div className="card">
            <div className="card__header">
              <div className="card__title">
                <button
                  type="button"
                  className="button button--dark"
                  onClick={() => this.props.history.push("/")}
                >
                  Go back
                </button>
              </div>
              <div className="card__title">
                <strong>{this.props.movie.title}</strong>
              </div>
            </div>
          </div>
          <div className="card-view">
            <div className="card-view__body">
              <div className="card-view__image">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}
                  alt=""
                />
              </div>
              <div className="card-view__information">
                <div className="card-view__title">
                  <strong>{this.props.movie.title}</strong>
                </div>

                <div className="card-view__title">
                  <p className="card-view__label">Description:</p>
                  <p className="card-view__overview">{this.props.movie.overview}</p>
                </div>

                <div className="card-view__title">
                  <p className="card-view__label">Release Date:</p>
                  <p className="card-view__overview"><b>{moment(this.props.movie.release_date).format('DD-MM-YYYY')}</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

const mapStateToProps = (state, props) => ({
  movie: state.movies.selectedMovie
});

const mapDispatchToProps = dispatch => ({
  startGetMovieDetails: movieId => dispatch(startGetMovieDetails(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(View);

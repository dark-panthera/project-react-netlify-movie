import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setPrevious,
  setNext,
  startGetLatestMovies
} from "../../../actions/movies";

class Pagination extends Component {
  onPrevousClick = () => {
    this.props.setPrevious();
    this.props.startGetLatestMovies();
  };
  onNextClick = () => {
    this.props.setNext();
    this.props.startGetLatestMovies();
  };
  render() {
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <button
              className="button button--link"
              onClick={this.onPrevousClick}
              disabled={this.props.disablePrevious}
            >
              Previous
            </button>
            <button
              className="button button--link"
              onClick={this.onNextClick}
              disabled={this.props.disableNext}
            >
              Next
            </button>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state, props) => ({
  disableNext: state.movies.disableNext,
  disablePrevious: state.movies.disablePrevious
});

const mapDispatchToProps = dispatch => ({
  setPrevious: () => dispatch(setPrevious()),
  setNext: () => dispatch(setNext()),
  startGetLatestMovies: () => dispatch(startGetLatestMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

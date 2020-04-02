import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setPrevious,
  setNext,
  startGetLatestMovies
} from "../../../actions/movies";
import Checkbox from "./Checkbox/Checkbox";

class Genres extends Component {
  componentDidMount() {}
  render(props) {
    console.log(this.props.genres);
    return (
      <div className="header">
        <div className="content-container">
          <div className="header__content">
            {this.props.genres.map((genre, index) => (
              <div key={index}>
                <input type="radio" name="genre" value={genre.id} />
                <label>{genre.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  genres: state.movies.genres
});

export default connect(mapStateToProps, undefined)(Genres);

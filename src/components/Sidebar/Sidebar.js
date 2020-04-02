import React, { Component } from "react";
import { connect } from "react-redux";
import { setGenre, startGetGenreList } from "../../actions/movies";

class SideBar extends Component {
  state = {
    selectedGenre: ""
  };

  onChange = e => {
    this.setState({
      selectedGenre: e.target.value
    });
  };

  onFilter = () => {
    this.props.setGenre(this.state.selectedGenre);

    this.props.history.push('/dashboard');
  };

  onClear = () => {
    this.setState({
      selectedGenre: ""
    });

    this.props.setGenre("");
    this.props.onHideSidebar();
  };

  componentDidMount() {
    this.props.startGetGenreList();
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__content">
          <button
            type="button"
            className="button button--dark button--full"
            onClick={this.props.onHideSidebar}
          >
            Close
          </button>
        </div>

        <div className="sidebar__divider"></div>
        <div className="sidebar__genre">
          <div className="sidebar__genre-title">Genre List</div>
          {this.props.genres.map((genre, index) => {
            return (
              <div className="genre" key={index}>
                <label>
                  <input
                    type="radio"
                    className="option-input radio"
                    name="example"
                    value={genre.id}
                    onChange={this.onChange}
                  />
                  {genre.name}
                </label>
              </div>
            );
          })}
        </div>
        <div className="sidebar__action">
          <button
            type="button"
            className="button button--dark button--full"
            onClick={this.onFilter}
          >
            Filter
          </button>

          <button
            type="button"
            className="button button--dark button--full"
            onClick={this.onClear}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  genres: state.movies.genres
});

const mapDispatchToProps = dispatch => ({
  setGenre: genre => dispatch(setGenre(genre)),
  startGetGenreList: () => dispatch(startGetGenreList())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

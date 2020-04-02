import React from "react";
import moment from 'moment';
import { Link } from "react-router-dom";

const card = props => {
  return (
    <div className="card">
      <div className="card__title">
        <strong>{props.movie.title}</strong>
      </div>
      <div className="card__body">
        <p>
          <span className="card__body__rating">{props.movie.vote_average}</span> / <b>100</b>
        </p>
      </div>
      <div className="card__img">
        <div className="card__release-date">
          {moment(props.movie.release_date).format('YYYY')}
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="card__actions">
        <Link to={`movie/${props.movie.id}`} className="button button--view">View</Link>
      </div>
    </div>
  );
};

export default card;

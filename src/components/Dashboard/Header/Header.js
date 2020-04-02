import React from "react";
import { Link } from "react-router-dom";

const header = props => {
  return (
    <header className="header">
      <div className="">
        <div className="header__content">
          <div className="header__left">
            <div className="header__bar" onClick={props.onHideSidebar}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <Link to="/dashboard" className="header__title">
              <h1>Netlify</h1>
            </Link>
          </div>

          <div className="header__right">
            <button className="button button--link" onClick={props.onToggleFilter}>
              <span className="fa fa-filter"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;

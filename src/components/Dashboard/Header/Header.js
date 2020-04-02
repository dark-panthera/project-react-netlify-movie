import React from "react";

const header = props => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <a className="header__title">
            <h1>Netlify</h1>
          </a>
          <button className="button button--link" onClick={props.toggle}>
            <span className="fa fa-filter"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default header;

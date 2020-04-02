import React from "react";

const card = props => {
  return (
    <div className="card">
      <div className="card__title">
      <strong>My Title</strong>
      </div>
      <div className="info">
       
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          consectetur sapiente ipsam nihil velit quae ab unde quasi
          exercitationem esse
        </p>
      </div>
      <img
        src="http://freeaussiestock.com/free/Victoria/Melbourne/slides/fed_square.jpg"
        alt=""
      />
    </div>
  );
};

export default card;

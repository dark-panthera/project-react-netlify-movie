import React from "react";

const genres = (props) => {
  return (
    <div className="checkable">

      <div class="custom-radios">
        <input type="radio" id={props.id} name="color" value="color-1" checked />
        <label for="color-1">
          <span>
            <img
              src="/images/check-icn.svg"
              alt="Checked Icon"
            />
          </span>
        </label>
      </div>
    </div>
  );
};

export default genres;

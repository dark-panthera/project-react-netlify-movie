import React from "react";
import Card from "./Cards/Card";

const cardHolder = props => {
  return (
    <div className="cardholder">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default cardHolder;

import React from "react";
import Special from "../Special/Special";

const Myself = ({ house }) => {
  return (
    <div>
      <h4>myself</h4>
      <p>house: {house}</p>
      <Special></Special>
    </div>
  );
};

export default Myself;

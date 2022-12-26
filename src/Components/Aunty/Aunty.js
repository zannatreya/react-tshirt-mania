import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Aunty = () => {
  const [house, setHouse] = useContext(RingContext);
  const handleHouseIncrease = () => {
    setHouse(house + 1);
  };
  return (
    <div>
      <h4>Aunty</h4>
      <p>house: {house}</p>
      <button onClick={handleHouseIncrease}>Aunty Magic</button>
    </div>
  );
};

export default Aunty;

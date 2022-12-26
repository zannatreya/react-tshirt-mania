import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Special = () => {
  const [house, setHouse] = useContext(RingContext);
  // const ring = useContext(RingContext);
  return (
    <div>
      <h5>Special</h5>
      <p>
        {/* <small>Gift: {ring}</small> */}
        <small>House: {house}</small>
      </p>
      <button onClick={() => setHouse(house + 1)}>Buy a house</button>
    </div>
  );
};

export default Special;

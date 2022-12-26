import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./grandpa.css";

export const RingContext = createContext("ring");

const GrandPa = () => {
  //   const house = 7;

  const [house, setHouse] = useState(1);

  const ornament = "ring";

  const handleBuyAHouse = () => {
    setHouse(house + 1);
  };

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h5>Grandpa</h5>
        <p>
          house: {house} <button onClick={handleBuyAHouse}>Buy A House</button>
        </p>

        <section style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default GrandPa;

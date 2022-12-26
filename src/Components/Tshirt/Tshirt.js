import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { name, price, picture } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h3>Name: {name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(tshirt)}>Add to cart</button>
    </div>
  );
};

export default Tshirt;

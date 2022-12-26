import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let command;
  if (cart.length === 0) {
    command = <p>khoroc kor!!!!!!!</p>;
  } else if (cart.length === 1) {
    command = <p>aro khoroc kor!!!!!!!</p>;
  } else {
    command = <p>thanks for adding</p>;
  }

  return (
    <div>
      <h2>Selected Items: {cart.length}</h2>
      {cart.map((tshirt) => (
        <p>
          <img
            src={tshirt.picture}
            style={{
              width: "20px",
              height: "20px",
              border: "2px solid goldenrod",
              borderRadius: "50%",
            }}
            alt=""
          />
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt)}> X</button>
        </p>
      ))}
      {command}
      {cart.length === 2 && <p>Yayyyy!!!!!! 2ta shirt</p>}
      {cart.length !== 3 || <p>More adding</p>}
      {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove all</button>}
    </div>
  );
};

export default Cart;

import React, { useState } from "react";
import Cart from "../assets/cart.png";

const AddToCart = (props) => {
  const [sneakers, setSneakers] = useState(0);
  const increase = () => {
    setSneakers(sneakers + 1);
  };
  const decrease = () => {
    if (sneakers !== 0) {
      setSneakers(sneakers - 1);
    }
  };
  const addToCart = () => {
    setSneakers(0)
    props.setcount((prev) => prev + sneakers)
  };
  return (
    <div style={{display:"flex",paddingLeft:"16px"}}>
      <div
        style={{
          fontSize: "50px",
          display: "felx",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "56px",
            backgroundColor: "#F6F8FD",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <span
            style={{
              paddingLeft: "16px",
              fontSize: "16px",
              width: "12px",
              color: "orange",
            }}
            onClick={decrease}
          >
            -
          </span>
          <span
            style={{ paddingLeft: "16px", fontSize: "16px", width: "10px" }}
          >
            {sneakers}
          </span>
          <span
            style={{
              paddingLeft: "16px",
              fontSize: "16px",
              width: "12px",
              paddingRight: "16px",
              color: "orange",
            }}
            onClick={increase}
          >
            +
          </span>
        </div>
      </div>
      <button
        style={{
          width: "272px",
          height: "56px",
          borderRadius: "10px",
          backgroundColor: "orange",
          color: "white",
          fontSize: "16px",
          border: "none",
        }}
        onClick={addToCart}
      >
        <img style={{height:"16px",width:"16px",marginLeft:"16px"}} src={Cart} alt="cart" />
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;

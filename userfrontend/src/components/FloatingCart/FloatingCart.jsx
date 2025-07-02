import React, { useContext } from "react";
import { Storecontext } from "../../context/Storecontext";
import "./FloatingCart.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const FloatingCart = () => {
  const { cartitems, food_list, getTotalCartAmount } = useContext(Storecontext);
  const navigate = useNavigate();

  // Get total item count
  const totalItems = Object.values(cartitems).reduce((a, b) => a + b, 0);

  if (totalItems === 0) return null; // Don't show if cart is empty

  return (
    <div className="floating-cart" onClick={() => navigate("/cart")}>
      <img src={assets.basket_icon} alt="cart" />
      <div className="cart-details">
        <p>~Your Cart~</p>
        <p>{totalItems} items</p>
        <p>₹{getTotalCartAmount()}</p>
      </div>
    </div>
  );
};

export default FloatingCart;
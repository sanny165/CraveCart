import React from "react";
import { useState, useContext } from "react";
import "./Foodcard.css";
import { assets } from "../../assets/assets";
import storecontextprovider, { Storecontext } from "../../context/Storecontext";

const Foodcard = ({ _id, name, price, description, image,category }) => {
  const { cartitems, setcartitems, addtocart, removefromcart,url } =
    useContext(Storecontext);

  const [showIngredients, setShowIngredients] = useState(false);
  let hoverTimeout;

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      setShowIngredients(true);
    }, 300); 
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setShowIngredients(false);
  };  
    
  return (
    <div className="fooditem" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="fooditemimgcont">
        <img src={`${url}/image/${image}`} alt="" className="fooditemimg" />
        {!cartitems[_id] || cartitems[_id] === 0 ? (
  <img id="plus"
    onClick={() => addtocart(_id)}
    src={assets.add_icon_white}
    className="add"
    alt=""
  />
) : (
  <div className="food-item-counter">
    <img
      onClick={() => removefromcart(_id)}
      src={assets.remove_icon_red}
      alt=""
    />
    <p>{cartitems[_id]}</p>
    <img
      onClick={() => addtocart(_id)}
      src={assets.add_icon_green}
      alt=""
    />
  </div>
)}

      </div>
      <div className="fooditeminfo">
        <p className="fooditemname">{name}</p>
        <p className="fooditemdesc">{description}</p>
        <div className="fooditemrating">
          <p className="fooditemprice">₹{price}</p>
          <img src={assets.rating_stars} alt="" />
        </div>
        <p className="fooditemdesc"></p>
        {showIngredients && (<div className="fooditem-reveal"><div>Delicious and healthy</div>Ingredients:{" "}
    {category === "Deserts" || category === "Cake"
      ? "Milk, Sugar, Nuts"
      : "Tomato, Cheese, Basil"}</div>
      )}
      </div>
    </div>
  );
};

export default Foodcard;

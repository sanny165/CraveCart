// SurpriseDish.jsx
import React, { useState, useContext } from "react";
import { Storecontext } from "../../context/Storecontext";
import './SurpriseDish.css'

const SurpriseDish = () => {
  const { food_list } = useContext(Storecontext);
  const [dish, setDish] = useState(null);

  const getRandomDish = () => {
    const randomIndex = Math.floor(Math.random() * food_list.length);
    setDish(food_list[randomIndex]);
  };

  return (
    <div className="surprise-container">
        <p className="surprise-teaser">Not sure what to eat? We’ve got you covered!!</p>

      <button className="surprise-btn" onClick={getRandomDish}>
        
        Surprise Me!
      </button>

      {dish && (
        <div className="surprise-dish-card">
          <h3>{dish.name}</h3>
          <p>₹{dish.price}</p>
        </div>
      )}
    </div>
  );
};

export default SurpriseDish;

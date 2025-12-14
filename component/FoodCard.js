import React from "react";
import "./FoodCard.css";

const FoodCard = ({ image, name, description, price }) => {
  return (
    <div className="food-card">
      <img src={image} alt={name} className="food-image" />

      <div className="food-content">
        <h3 className="food-name">{name}</h3>
        <p className="food-description">{description}</p>

        <div className="food-footer">
          <span className="food-price">${price}</span>
          <button className="add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

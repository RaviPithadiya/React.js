import React from "react";
import "./Cards.css";

const cardData = [
  {
    title: "Burger",
    desc: "Juicy grilled burger with cheese",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    title: "Pizza",
    desc: "Cheesy pizza with fresh toppings",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
  {
    title: "Sandwich",
    desc: "Healthy sandwich with veggies",
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b",
  },
  {
    title: "Dessert",
    desc: "Sweet dessert with chocolate",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },
];

const Cards = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <div className="card-body">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <button>View More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

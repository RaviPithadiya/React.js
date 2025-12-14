import React from "react";
import FoodCard from "../src/component/FoodCard.js";
import Cards from "./component/Cards.js";

function App() {
  return (
    <div style={{ padding: "40px", display: "flex", gap: "20px" }}>
      <FoodCard
        image="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        name="Cheese Burger"
        description="Juicy beef burger with cheese and fresh veggies"
        price="8.99"
      />

      <FoodCard
        image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
        name="Italian Pizza"
        description="Crispy pizza with mozzarella and basil"
        price="12.50"
      />
      <Cards />;
    </div>
    
  );
}

export default App;



  




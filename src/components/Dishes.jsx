
import React from 'react';
import '../styles/Dishes.css';

function Dishes() {
  const recipes = [
    { 
      name: "Jollof Rice",
      description: "A West African dish made with rice, tomato, pepper, onions and flavorful spices.",
      image: "/image/jollof-rice.jpg",
    },
    {
      name: "Fried Plantain",
      description: "A beloved West African side dish made from ripe plantains fried until golden brown.",
      image: "/image/fried-plantain.jpg",
    },
    
 
    {
      name: "Pounded Yam",
      description: "Smooth, stretchy yam dough typically served with soups like Egusi or Ogbono.",
      image: "/image/pounded-yam.jpg",
    },
    {
      name: "Amala",
      description: "A popular Nigerian swallow made from semolina flour, paired with vegetable or meat-based soups.",
      image: "/image/amala.jpg",
    },
    {
      name: "Coconut Rice",
      description: "Rice cooked in coconut milk, giving it a creamy texture and slightly sweet flavor.",
      image: "/image/coconut-rice.jpg",
    },
    {
      name: "Fried Rice",
      description: "Rice stir-fried with vegetables, shrimp, or chicken, commonly served at parties and gatherings.",
      image: "/image/fried-rice.jpg",
    },
    {
      name: "Yam and Egg Sauce",
      description: "Boiled yam served with a spicy tomato and egg sauce, a simple and hearty Nigerian dish.",
      image: "/image/yam-egg-sauce.jpg",
    },
    {
      name: "Chicken and Chips",
      description: "Crispy fried chicken served with golden fries, a favorite comfort meal.",
      image: "/image/chicken-chips.jpg",
    },
    {
      name: "Shawarma",
      description: "Seasoned chicken or beef wrap with vegetables and sauces, popular in Nigerian fast-food joints.",
      image: "/image/shawarma.jpg",
    },
    {
      name: "Ice Cream",
      description: "A sweet frozen treat, perfect to cool down after a spicy Nigerian meal.",
      image: "/image/ice-cream.jpg",
    },
    {
      name: "Pepper Meat",
      description: "Spicy Nigerian beef or goat meat sautéed with red peppers and onions for a fiery, tasty dish.",
      image: "/image/pepper-meat.jpg",
    },
  ];

  return (
    <div className="recipe-list-page">
      <h1>Popular Recipes</h1>
      <div className="recipe-cards">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <a href="#" className="view-button">View Recipe</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dishes;


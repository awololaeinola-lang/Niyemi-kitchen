

import React from 'react';
import '../styles/Menu.css';
import Navbar from './Navbar';

function Menu() {
  const menuItems = [
    {
      category: "Main Dishes",
      items: [
        { name: "Jollof Rice", price: "₦2,000", description: "Classic West African rice cooked in spicy tomato sauce." },
        { name: "Efo Riro", price: "₦2,500", description: "Rich spinach stew with assorted meats and flavorful spices." },
        { name: "Fried Rice & Chicken", price: "₦2,800", description: "Savory rice with veggies and perfectly fried chicken." },
      ],
    },
    {
      category: "Sides & Snacks",
      items: [
        { name: "Fried Plantain", price: "₦800", description: "Crispy golden plantains – sweet and delicious." },
        { name: "Moi Moi", price: "₦1,000", description: "Steamed bean pudding made with spices and fish." },
      ],
    },
    {
      category: "Drinks & Desserts",
      items: [
        { name: "Zobo Drink", price: "₦700", description: "Refreshing hibiscus flower drink with pineapple flavor." },
        { name: "Chin Chin", price: "₦600", description: "Crispy sweet dough bites, perfect for snacking." },
      ],
    },
  ];

  return (
    <div className="menu-page">
      

      <header className="menu-header">
        <h1>Our Menu</h1>
        <p>Explore our variety of freshly made African dishes — each one prepared with love and authentic ingredients.</p>
      </header>

      <section className="menu-section">
        {menuItems.map((category, index) => (
          <div key={index} className="menu-category">
            <h2>{category.category}</h2>
            <div className="menu-grid">
              {category.items.map((item, i) => (
                <div key={i} className="menu-item">
                  <div className="menu-info">
                    <h3>{item.name}</h3>
                    <p className="menu-description">{item.description}</p>
                  </div>
                  <span className="menu-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="menu-cta">
        <h2>Ready to Taste Our Dishes?</h2>
        <p>Order now and enjoy delicious homemade meals straight from our kitchen to your table.</p>
        <button className="order-button">Order Now</button>
      </section>

      <footer className="menu-footer">
        <p>© 2025 Niyemi Kitchen | Authentic African Taste</p>
      </footer>
    </div>
  );
}

export default Menu;

import React, { useState } from 'react';
import '../styles/Order.css';

// Example menu data – you can also import this from a Menu.js file
const menuItems = [
  { name: "Jollof Rice" },
  { name: "Fried Plantain" },
  { name: "Egusi Soup" },
  { name: "Pounded Yam" },
];

const Order = () => {
  const [order, setOrder] = useState({
    name: '',
    email: '',
    dish: '',
    quantity: 1,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', order);
    setSubmitted(true);

    // Reset form
    setOrder({
      name: '',
      email: '',
      dish: '',
      quantity: 1,
    });
  };

  return (
    <div className="order-page">
      

      <section className="order-section">
        <h1>Place Your Order</h1>
        <p>Fill in your details and your order will be processed.</p>

        {submitted && <p className="success-message">✅ Your order has been submitted!</p>}

        <form className="order-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={order.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={order.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Dish:
            <select name="dish" value={order.dish} onChange={handleChange} required>
              <option value="">--Select Dish--</option>
              {menuItems.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={order.quantity}
              onChange={handleChange}
              min="1"
              required
            />
          </label>

          <button type="submit" className="order-button">
            Submit Order
          </button>
        </form>
      </section>
    </div>
  );
};

export default Order;



import React from 'react';
import '../styles/Review.css';


const reviews = [
  {
    name: "Adeola O.",
    rating: 5,
    comment: "Absolutely loved the Jollof Rice! The flavors were perfect and the delivery was quick.",
  },
  {
    name: "Chukwuemeka A.",
    rating: 4,
    comment: "The Fried Plantain was crispy and sweet. Will definitely order again!",
  },
  {
    name: "Funke T.",
    rating: 5,
    comment: "Amazing service and delicious food. Highly recommend Niyemi Kitchen!",
  },
];

const Review = () => {
  return (
    <div className="review-page">
      

      <header className="review-header">
        <h1>What Our Customers Say</h1>
        <p>Real feedback from our valued customers about our delicious dishes.</p>
      </header>

      <section className="review-section">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <div className="review-stars">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < review.rating ? 'filled' : ''}>★</span>
              ))}
            </div>
            <p className="review-comment">"{review.comment}"</p>
          </div>
        ))}
      </section>

      <section className="review-cta">
        <h2>Leave Your Own Review</h2>
        <p>We love hearing from you! Share your experience and help others discover our dishes.</p>
        <button className="review-button">Submit Review</button>
      </section>

      <footer className="review-footer">
        <p>© 2025 Niyemi Kitchen | Authentic African Taste</p>
      </footer>
    </div>
  );
};

export default Review;

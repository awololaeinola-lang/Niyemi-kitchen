import React from "react";
import "../styles/About.css";

import aboutImage from "../assets/about-image.jpg";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import comm from "../assets/comm.jpg";

function About() {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="hero-text">
          <h1>About Our Recipe Hub</h1>
          <p>
            Welcome to our Recipe Hub! We share a collection of delicious African dishes,
            from classic Nigerian favorites like Jollof Rice and Efo Riro to modern meals.
            Our goal is to make cooking easier and more enjoyable for everyone.
          </p>
        </div>
        <div className="hero-image">
          <img src={aboutImage} alt="Cooking together" />
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Niyemi Kitchen began in a small family kitchen, inspired by the rich traditions
          and flavors of African cuisine. What started as a passion for sharing food has
          grown into a digital space where we celebrate culture through delicious, easy-to-follow recipes.
          Every dish tells a story of love, creativity, and community.
        </p>
      </section>

      {/* MISSION SECTION */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire home cooks by providing easy-to-follow recipes,
          authentic flavors, and practical tips for creating unforgettable meals.
          We believe cooking should be fun, accessible, and full of flavor for everyone.
        </p>
      </section>

      {/* TEAM SECTION */}
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src={team1} alt="Raji Riddie" />
            <h3>Raji Riddie</h3>
            <p>Recipe Developer</p>
          </div>
          <div className="team-card">
            <img src={team2} alt="Niniola" />
            <h3>Niniola</h3>
            <p>Head Chef</p>
          </div>
          <div className="team-card">
            <img src={team3} alt="Temmy" />
            <h3>Temmy</h3>
            <p>Creative Director</p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="about-gallery">
        <h2>Our Kitchen Moments</h2>
        <div className="gallery-grid">
          <img src={comm} alt="Nourishable meals" />
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="about-testimonials">
        <h2>What Our Readers Say</h2>
        <div className="testimonials">
          <blockquote>
            “Niyemi Kitchen made me fall in love with Nigerian cuisine again. The recipes are simple and always tasty!”
            <span>– Ola, Kwara</span>
          </blockquote>
          <blockquote>
            “Every week I discover something new to try. It feels like having a friend in the kitchen!”
            <span>– Yusuf, Abuja</span>
          </blockquote>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="about-cta">
        <h2>Join Our Foodie Community</h2>
        <p>Get weekly African recipes, cooking tips, and exclusive kitchen secrets straight to your inbox.</p>
        <button className="cta-button">Subscribe Now</button>
      </section>

      {/* SOCIAL MEDIA SECTION */}
      <section className="about-socials">
        <h2>Connect With Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        <p>© 2025 Niyemi Kitchen | Made with ❤️ in Nigeria</p>
      </footer>
    </div>
  );
}

export default About;

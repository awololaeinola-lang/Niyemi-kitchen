
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
    

      {/* HERO SECTION */}
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          Have questions, ideas, or feedback? We’d love to hear from you!  
          Whether it’s a recipe suggestion or a collaboration request,  
          the Niyemi Kitchen team is always ready to connect.
        </p>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="contact-section">
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><i className="fas fa-map-marker-alt"></i> Sokoto, Nigeria</p>
          <p><i className="fas fa-envelope"></i> awololaeinola@email.com</p>
          <p><i className="fas fa-phone"></i> +234 9069190561</p>

          <div className="social-links">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="contact-footer">
        <p>© 2025 Niyemi Kitchen | Crafted with ❤️ in Nigeria</p>
      </footer>
    </div>
  );
}

export default Contact;

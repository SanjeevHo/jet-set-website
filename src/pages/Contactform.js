import React from 'react';
import './Contactform.css'; // Ensure you have the CSS file created and linked

function ContactForm() {
  return (
    <div className="contact-section">
        
      <div className="contact-form">
        <h2>Looking For More Options?</h2>
        <p>Allow Our Charter Experts to get in touch with you</p>
        <form>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email address" />

          <label htmlFor="message">Your message here</label>
          <textarea id="message" placeholder="Type your message here"></textarea>

          <button type="submit" className="submit-btn">SUBMIT</button>

        </form>
      </div>
    </div>
  );
}

export default ContactForm;

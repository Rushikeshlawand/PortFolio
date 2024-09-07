import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_ohzcpch', 'template_id', formData, 'user_your_user_id')
      .then((response) => {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        alert('There was an error sending your message. Please try again.');
      });
  };

  return (
    <section id="contact">
      <div className="contact-message">
        <h2>Get in Touch</h2>
        <p>
          We would love to hear from you! If you have any questions or feedback,
          feel free to reach out to us using the form on the right.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactPage;

import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
          />
          <button type="submit">Send</button>
          {submitted && <div className="contact-thankyou">Thank you! I’ll get back to you soon.</div>}
        </form>
        <div className="contact-info">
          <p>Email: <a href="mailto:penelope@example.com">penelope@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/penelopeyang" target="_blank" rel="noopener noreferrer">/penelopeyang</a></p>
        </div>
      </div>
    </section>
  );
} 
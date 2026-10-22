
import React from 'react';
import '../styles/Contact.css';
const Contact = () => {
  return (
    <section className="contact-section">
      <h1>Contact Me</h1>
      <p>I'd love to connect with you!</p>

      <p>
        Email: swethanarayanan2005@gmail.com
      </p>

      <p>
        Phone: +91 9710261121
      </p>

      <p>
        Location: Pattabiram, Chennai - 600072
      </p>

      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/swetha-s-17960a2a4"
          target="_blank"
          rel="noreferrer"
        >
          Visit my LinkedIn
        </a>
      </p>

      <p>
        GitHub:{" "}
        <a
          href="https://github.com/SwethaS01"
          target="_blank"
          rel="noreferrer"
        >
          Visit my GitHub
        </a>
      </p>
    </section>
  );
};

export default Contact;

import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Your message has been sent successfully!');
  
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSuccessMessage(''), 5000);
  };
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/icons8-mail-48.png")} alt="Email icon" />
            <a href="mailto:hemangi.solanki2003@gmail.com">mymail@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/icons8-linkedin-48.png")} alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/hemangi-solanki-839144314">linkedin.com</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/">github.com</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/icons8-instagram-48.png")} alt="Instagram icon" />
            <a href="http://instagram.com/__hemangii_03">Instagram.com</a>
          </li>
        </ul>
      </div>
      <div>
      <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            required
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <label>Message</label>
          <textarea
            className="form-control"
            required
            placeholder="Enter your message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <br />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>Submit</button>
          </div>
          {successMessage && <div id="success-message" className={styles.successMessage}>{successMessage}</div>}
        </form>
      </div>
    </footer>
  );
};

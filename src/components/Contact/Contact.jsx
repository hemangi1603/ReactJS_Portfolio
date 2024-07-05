import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
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
            <img
              src={getImageUrl("contact/icons8-linkedin-48.png")}
              alt="LinkedIn icon"
            />
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
        <form>
          <input type="text" name="Name" placeholder="Your Name" required /><br />
          <input type="email" name="Email" placeholder="Your Email" required /><br />
          <textarea name="Message" rows="6" placeholder="Your Message"></textarea><br />
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
      </div>
    </footer>
  );
};

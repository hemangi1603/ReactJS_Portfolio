import React, { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  const handleContactClick = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  return (
    <section className={styles.container}><br></br>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hemangi</h1>
        <p className={styles.description}>
          "I am an IT student currently honing my skills in full-stack development using React and NodeJS."
        </p>
        <a className={styles.contactBtn} onClick={handleContactClick}>
          Contact Me
        </a>
        {showSocialIcons && (
          <div className={styles.socialIcons}>
            <a href="http://instagram.com/__hemangii_03" target="_blank" rel="noopener noreferrer">
              <img src={getImageUrl("contact/icons8-instagram-48.png")} alt="Instagram" className={styles.socialIcon} />
            </a>
            <a href="https://www.facebook.com/hemangi.solanki.5076?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <img src={getImageUrl("contact/icons8-facebook-48.png")} alt="Facebook" className={styles.socialIcon} />
            </a>
            <a href="https://www.linkedin.com/in/hemangi-solanki-839144314" target="_blank" rel="noopener noreferrer">
              <img src={getImageUrl("contact/icons8-linkedin-48.png")} alt="LinkedIn" className={styles.socialIcon} />
            </a>
            <a href="https://github.com/hemangi1603" target="_blank" rel="noopener noreferrer">
              <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" className={styles.socialIcon} />
            </a>
            <a href="mailto:hemangi.solanki2003@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={getImageUrl("contact/icons8-mail-48.png")} alt="Mail" className={styles.socialIcon} />
            </a>
          </div>
        )}
      </div>
      <img
        src={getImageUrl("hero/IMG_20211105_185727_932-removebg-preview-modified.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      
    </section>
  );
};

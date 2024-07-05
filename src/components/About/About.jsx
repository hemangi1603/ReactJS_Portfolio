import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/IMG20220101120457-removebg-preview2.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutDetails}>
          <div className={styles.detailsList}>
            <p>
              <b>Name:</b> Hemangi Solanki<br />
              <b>Graduation Year:</b> 2024<br />
              <b>Language:</b> English, Hindi, Gujarati<br />
              <b>Interest:</b> Traveling, Art<br />
              <b>Address:</b> Chandkheda, Ahmedabad, India
            </p>
          </div>
          <div className={styles.aboutItemText}>
            <p>
              I am currently pursuing my MSc in IT at K.S. School Of Business Management & Information Technology (CA & IT), where I have gained extensive knowledge and hands-on experience in various aspects of web development. I have successfully completed several projects that demonstrate my skills and creativity.<br />
              Throughout my academic journey, I have tackled challenging projects that have deepened my expertise in frontend frameworks like React and Vue.js, as well as backend technologies such as Node.js and Django. These experiences have sharpened my ability to conceptualize and deliver scalable web applications that meet both user needs and business objectives.
            </p><br></br><br></br>
            <p>
              <b>Profile:</b> Computer Application & Information Technology (CA & IT)<br />
              <b>Education:</b> Master of Science in Computer Application & Information Technology.<br />
              <b>University:</b> Gujarat University
            </p>
          </div>
        </div>
      </div><br></br><br></br>
    </section>
  );
};

import React, { useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const skillsPerPage = 8;

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(skills.length / skillsPerPage));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(skills.length / skillsPerPage)) % Math.ceil(skills.length / skillsPerPage));
  };

  const displayedSkills = skills.slice(currentSlide * skillsPerPage, (currentSlide + 1) * skillsPerPage);

  return (
    <section className={styles.container} id="experience">
      {/* Skills section */}
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skills}>
          {displayedSkills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.navigationButtons}>
          {currentSlide > 0 && (
            <button className={`${styles.arrowButton} ${styles.left}`} onClick={handlePrevSlide}>{"<"}</button>
          )}
          {currentSlide < Math.ceil(skills.length / skillsPerPage) - 1 && (
            <button className={`${styles.arrowButton} ${styles.right}`} onClick={handleNextSlide}>{">"}</button>
          )}
        </div>
      </div>

      {/* Experience section */}
      <h2 className={styles.title} style={{ marginTop: "60px" }}>Experience</h2>
      <div className={styles.history}>
        {history.map((historyItem, id) => (
          <div key={id} className={styles.historyItem}>
            {/* <img
              src={getImageUrl(historyItem.imageSrc)}
              alt={`${historyItem.organisation} Logo`}
            /> */}
            <div className={styles.historyItemDetails}>
              {/* <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
              <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> */}
              <h3>{`${historyItem.role}`}</h3>
              {historyItem.experiences.length > 0 && (
                <ul>
                  {historyItem.experiences.map((experience, index) => (
                    <li key={index}>{experience}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

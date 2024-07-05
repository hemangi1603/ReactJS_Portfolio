import React, { useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const skillsPerPage = 6;

  const handleDownloadResume = (e) => {
    e.preventDefault();

    const resumeFilePath = "/RESUME.docx";
    console.log("Resume File Path:", resumeFilePath);

    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.setAttribute('download', 'Resume -.pdf');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(skills.length / skillsPerPage));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + Math.ceil(skills.length / skillsPerPage)) % Math.ceil(skills.length / skillsPerPage));
  };

  const displayedSkills = skills.slice(currentSlide * skillsPerPage, (currentSlide + 1) * skillsPerPage);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.history}>
          {history.map((historyItem, id) => (
            <div key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.skillsContainer}>
          <h2 className={styles.title}>Skills</h2>
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
              <button className={`${styles.arrowButton} ${styles.left}`} onClick={handlePrevSlide}>
                {"<"}
              </button>
            )}
            {currentSlide < Math.ceil(skills.length / skillsPerPage) - 1 && (
              <button className={`${styles.arrowButton} ${styles.right}`} onClick={handleNextSlide}>
                {">"}
              </button>
            )}
          </div>
        </div>
      </div><br></br><br></br>
      <div className={styles.resumeBtnContainer}>
        <a href="C:\Users\HEMANGI SOLANKI\Documents\Hemangi doc\Resume -.pdf" className={styles.resumeBtn} onClick={handleDownloadResume}>
          Download Resume
        </a>
      </div>
    </section>
  );
};

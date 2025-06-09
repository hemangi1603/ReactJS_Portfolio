import React, { useState } from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import projects from "../../data/projects.json";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + projectsPerPage < projects.length) {
      setCurrentIndex(currentIndex + projectsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - projectsPerPage >= 0) {
      setCurrentIndex(currentIndex - projectsPerPage);
    }
  };

  const displayedProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + projectsPerPage >= projects.length;

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.sliderContainer}>
        <button
          className={styles.arrowBtn}
          onClick={handlePrev}
          disabled={isPrevDisabled}
          style={{ visibility: isPrevDisabled ? "hidden" : "visible" }}
        >
          <FiChevronLeft />
        </button>

        <div className={styles.projects}>
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <button
          className={styles.arrowBtn}
          onClick={handleNext}
          disabled={isNextDisabled}
          style={{ visibility: isNextDisabled ? "hidden" : "visible" }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

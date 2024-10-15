import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>ALI URAL</h1>
        <p className={styles.description}>
          Aspiring software engineer based in Philadelphia with a passion for web and AI technologies.
        </p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="mailto:asu25@drexel.edu">
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/aliural" target="_blank" rel="noopener noreferrer">
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com/alisemihural" target="_blank" rel="noopener noreferrer">
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            </a>
          </li>
        </ul>
      </div>
      {/* <div className={styles.blur1} />
      <div className={styles.blur2} />
      <div className={styles.blur3} /> */}
    </section>
  );
};
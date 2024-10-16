import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  
  // const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
  // if (isFirefox){
  //   document.body.classList.add('firefox');
  // } else {

  // }
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>ALI URAL</h1>
        <p className={styles.description}>
        Software engineer pursuing a Bachelor’s degree in Computer Science at Drexel University, with a focus on AI and web technologies, and experience in problem-solving across diverse platforms.
        </p>
        <a href="mailto:asu25@drexel.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.blur1} />
      <div className={styles.blur2} />
      <div className={styles.blur3} />
    </section>
  );
};

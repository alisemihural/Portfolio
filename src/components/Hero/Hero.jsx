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
        <h1 className={styles.title}>Hi, I'm Ali</h1>
        <p className={styles.description}>
        I'm a sophomore computer science student with four years of programming experience, specializing in backend development using Django and Spring Boot. Reach out if you'd like to learn more!
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

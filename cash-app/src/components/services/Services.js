import React from "react";
import styles from "./Services.module.css";
const Services = () => {
  return (
    <>
    <span className={styles.servicesBefore}></span>
      <h2 className={styles.servicesHeader}>Services</h2>
      <span className={styles.servicesAbout}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nobis!
        Laudantium perferendis iusto inventore omnis voluptatum, vel dignissimos
        nobis eaque sunt libero ut laboriosam quae quasi tempora aut voluptatem
        blanditiis?
      </span>
      <ul className={styles.servicesList}>
        <li className={styles.icon1}>
          <span className={styles.servicesHead}>Brake Service</span>
          <span className={styles.servicesDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, dolor!</span>
        </li>
        <li className={styles.icon2}>
          <span className={styles.servicesHead}>Wheel Service</span>
          <span className={styles.servicesDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, dolor!</span>
        </li>
        <li className={styles.icon3}>
          <span className={styles.servicesHead}>Auto glass Service</span>
          <span className={styles.servicesDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, dolor!</span>
        </li>
      </ul>
      <span className={styles.servicesAfter}></span>
    </>
  );
};

export default Services;

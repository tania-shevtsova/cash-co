import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div
    className={styles.headerDiv}
    >
      <div className={styles.headerRectangle}></div>
      <span className={styles.headerArrow}></span>
      <span className={styles.headerArrow}></span>
      <div>
        <h1 className={styles.headerDesc}>Service</h1>
        <span className={styles.headerAbout}>
          Over 35 Years Of Quality Auto Service
        </span>
        <button className={styles.headerButton}>
          <a href="#contacts">Call now</a>
        </button>
      </div>
    </div>
  );
};

export default Header;

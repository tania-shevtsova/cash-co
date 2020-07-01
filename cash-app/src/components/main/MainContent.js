import React, {useEffect} from 'react';
import styles from './MainContent.module.css';

const MainContent = () => {
    return (
        <div className={styles.mainContentWrapper} >
        <div className={styles.mainContent}>
         <ul className={styles.listContent}>
          <li className={styles.icon1}>
              <a href='#'>
                <span className={styles.listDesc}>Get an estimate</span>
              </a>
            </li>
            <li className={styles.icon2}>
              <a href='#'>
                <span className={styles.listDesc}>Brake Service</span>
              </a>
            </li>
            <li className={styles.icon3}>
              <a href='#'>
                <span className={styles.listDesc}>Wheel Service</span>
              </a>
            </li>
            <li className={styles.icon4}>
              <a href='#'>
                <span className={styles.listDesc}>Auto Glass Service</span>
              </a>
            </li>
          </ul>
          {/* <ul className={styles.listContent}>
            <li className={styles.icon1}>
              <a href='#'>
                <span className={styles.listDesc}>Get an estimate</span>
              </a>
            </li>
            <li className={styles.icon2}>
              <a href='#'>
                <span className={styles.listDesc}>Brake Service</span>
              </a>
            </li>
            <li className={styles.icon3}>
              <a href='#'>
                <span className={styles.listDesc}>Wheel Service</span>
              </a>
            </li>
            <li className={styles.icon4}>
              <a href='#'>
                <span className={styles.listDesc}>Auto Glass Service</span>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    )
}

export default MainContent;
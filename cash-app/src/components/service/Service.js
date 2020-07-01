import React, {useEffect} from "react";
import styles from "./Service.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Service = () => {
      useEffect(()=>{
          AOS.init();
        }, []);
  return (
    <div className={styles.serviceBack}>
      <div className={styles.serviceWrapper}  data-aos="fade-up" data-aos-duration="1000">
        <div className={styles.serviceHead}>
          <h3 className={styles.serviceHeader}>Service Certified</h3>
          <span className={styles.serviceDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            sequi facilis at esse, architecto eaque quae unde qui, impedit
            reiciendis nisi est optio deserunt aut vitae nemo culpa!
          </span>
        </div>
        <div className={styles.serviceImg}>
          <div className={styles.layer}></div>
          <span className={styles.serviceImgDesc}>Auto Repair Services</span>
          <a href="#" className={styles.serviceImgLink}>
            Book Now
          </a>
          <span className={styles.serviceImgLinkIcon}></span>
        </div>
        <ul className={styles.serviceList}>
          <li className={styles.serviceListItem}>
            <span className={styles.serviceListItemImg}></span>
            <div className={styles.layerImg}></div>
            <div className={styles.serviceItemWrap}>
            <h4 className={styles.serviceItemDesc}>
              Which Car Service should I choose ?
            </h4>
            <span className={styles.serviceItemAbout}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum, tenetur beatae aperiam autem consequatur nisi.
            </span>
            <a href="#" className={styles.serviceItemLink}>View Project</a>
            <span className={styles.serviceImgLinkIconLink}></span>
            </div>
          </li>
          <li>
            <span className={styles.serviceListItemImg2}></span>
            <div className={styles.layerImg2}></div>
            <div className={styles.serviceItemWrap}>
            <h4 className={styles.serviceItemDesc2}>
              Tips to make your tyres last longer.
            </h4>
            <span className={styles.serviceItemAbout2}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              mollitia necessitatibus sit maxime corrupti voluptates.
            </span>
            <a href="#" className={styles.serviceItemLink2}>View Project</a>
            <span className={styles.serviceImgLinkIconLink2}></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Service;

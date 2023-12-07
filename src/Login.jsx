import React from "react";
import styles from "./Style/main.module.scss";
import Notification from "./component/Notification";
import Watch from "./component/Watch";

function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.login__left}>
        <div className={styles.box1}>
          <Notification />
        </div>
        <div className={styles.box2}>
        <div className={styles.box2_container}>
          <img src="/block1.svg" alt="notification" className={styles.block} />
          <img src="/block2.svg" alt="notification" className={styles.block} />
          <img src="/block3.svg" alt="notification" className={styles.block} />
        </div>
        <div className={styles.box2_container}>
          <img src="/block1.svg" alt="notification" className={styles.block} />
          <img src="/block2.svg" alt="notification" className={styles.block} />
          <img src="/block3.svg" alt="notification" className={styles.block} />
        </div>
        </div>
        <div className={styles.box3}>
          <img src="/Cohorts.png" alt="cohort img"  className={styles.cohort}/>
        </div>
        <div className={styles.box4}>
          <Watch />
        </div>

        <div className={styles.bottom}>
            <h4 className={styles.primaryHeading}>
            Testimonials
            </h4>
            <div className={styles.testimonials}>

            <div className={styles.testimonials_container}>
            <img src="/testimonial1.svg" alt="testimonial" className={styles.testimonial} />
            <img src="/testimonial2.svg" alt="testimonial" className={styles.testimonial} />
            <img src="/testimonial3.svg" alt="testimonial" className={styles.testimonial} />
         
            </div>
            <div className={styles.testimonials_container}>
            <img src="/testimonial1.svg" alt="testimonial" className={styles.testimonial} />
            <img src="/testimonial2.svg" alt="testimonial" className={styles.testimonial} />
            <img src="/testimonial3.svg" alt="testimonial" className={styles.testimonial} />
         
            </div>
            </div>
        </div>
      </div>
      <div className={styles.login__right}></div>
    </div>
  );
}

export default Login;

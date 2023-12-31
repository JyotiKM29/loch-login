import React, { useState } from "react";
import styles from "./Style/main.module.scss";
import Notification from "./component/Notification";
import Watch from "./component/Watch";
import { Link } from "react-router-dom";


function Login() {

  const [email, setEmail] = useState(""); 

 function handleSubmit(e){
  e.preventDefault();
  window.location.href = 'https://app.loch.one/welcome';
 }
    

  return (
    <div className={styles.login}>
      <div className={styles.login__left}>
        <div className={styles.box1}>
          <Notification />
        </div>
        <div className={styles.box2}>
          <div className={styles.box2_container}>
            <img
              src="/block1.svg"
              alt="notification"
              className={styles.block}
            />
            <img
              src="/block2.svg"
              alt="notification"
              className={styles.block}
            />
            <img
              src="/block3.svg"
              alt="notification"
              className={styles.block}
            />
          </div>
          <div className={styles.box2_container}>
            <img
              src="/block1.svg"
              alt="notification"
              className={styles.block}
            />
            <img
              src="/block2.svg"
              alt="notification"
              className={styles.block}
            />
            <img
              src="/block3.svg"
              alt="notification"
              className={styles.block}
            />
          </div>
        </div>
        <div className={styles.box3}>
          <img src="/Cohorts.png" alt="cohort img" className={styles.cohort} />
        </div>
        <div className={styles.box4}>
          <Watch />
        </div>

        <div className={styles.bottom}>
          <h4 className={styles.primaryHeading} style={{ textAlign: "right" }}>
            Testimonials
          </h4>
          <hr className={styles.hr} />
          <div className={styles.detail}>
            <div className={styles.logo}>
              <img src="/logo.svg" alt="logo" />
            </div>
            <div className={styles.testimonials}>
              <div className={styles.testimonials_container}>
                <img
                  src="/testimonial1.svg"
                  alt="testimonial"
                  className={styles.testimonial}
                />
                <img
                  src="/testimonial2.svg"
                  alt="testimonial"
                  className={styles.testimonial}
                />
                <img
                  src="/testimonial3.svg"
                  alt="testimonial"
                  className={styles.testimonial}
                />
              </div>
              <div className={styles.testimonials_container}>
                <img
                  src="/testimonial1.svg"
                  alt="testimonial"
                  className={styles.testimonial}
                />
                <img
                  src="/testimonial2.svg"
                  alt="testimonial"
                  className={styles.testimonial}
                />
                <img
                  src="/testimonial3.svg"
                  alt="testimonial"
                  className={styles.testimonial}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.login__right}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h4 className={styles.secandaryHeading} >
            Sign up for ?
            <br />
            exclusive access.
          </h4>
          <input 
           type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           />
          <span class={styles.errorMail} id="errorMail">
          Please enter a valid email
          </span>
       
  <button type="button">Get started</button>

          <p className={styles.p}>
            You’ll receive an email with an invite link to join.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

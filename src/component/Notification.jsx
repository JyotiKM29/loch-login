import React from 'react';
import styles from "../Style/main.module.scss";

const Notification = () => {
  return (
    <>
      <img src='/bell.svg' alt='notifiaction' className={styles.svg} />
         <h4 className={styles.primaryHeading}>
         Get notified when a highly correlated whale makes a move
         </h4>
         <p className={styles.text}>
         Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.
         </p>
    </>
  )
}

export default Notification

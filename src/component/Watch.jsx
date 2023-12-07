import React from 'react'
import styles from "../Style/main.module.scss";

const Watch = () => {
  return (
    <>
       <img src='/eye.svg' alt='notifiaction' className={styles.svg} />
         <h4 className={styles.primaryHeading}>
         Watch what the whales are doing
         </h4>
         <p className={styles.text}>
         All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.
         </p>
    </>
  )
}

export default Watch

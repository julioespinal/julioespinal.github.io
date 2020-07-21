import React from 'react'

import styles from './title_section.css'

export default function TitleSection() {
  return (
    <div className={styles.TitleSection}>
      <div className={styles.BigName}>
        Julio A. Espinal
    </div>
      <div className={styles.Adjectives}>
        <div className={styles.Adj}>
          Sofware Engineeer
      </div>
        <div className={styles.Adj}>
          Billiards Enthusiast
      </div>
        <div className={styles.Adj}>
          Entrepreneur
      </div>
      </div>
    </div>
  )
}
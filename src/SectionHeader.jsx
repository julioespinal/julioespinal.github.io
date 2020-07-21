import React from 'react'

import styles from './section_header.css'

export default function SectionHeader(props) {
  return (
    <div className={styles.SectionHeader}>
      <div className={styles.Name}>JAE{" "}|</div>
      <div className="SectionName">{props.sectionName}</div>
    </div>
  )
}
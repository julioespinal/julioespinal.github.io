import React from 'react'

import SectionHeader from './SectionHeader'

import styles from './history_container.css'

import ritLogo from './assets/rit.svg'
import xavierLogo from './assets/xavierhs.svg'

export default function EducationSection() {
  return (
    <>
      <SectionHeader sectionName="Education" />
      <div className={styles.History}>
        <div className={styles.Event}>
          <div className={styles.LogoContainer}>
            <img className={styles.Logo} src={ritLogo} />
          </div>
          <div className={styles.Blurb}>
            Aug 2005 - Apr 2012
            <br />Rochester, NY
              <p>
              Received BS and MS degrees in Computer Science with a focus on computer graphics. Also received minor degrees in Math and Japanese, though I've already forgotten most of it :(
              </p>
          </div>
        </div>

        <div className={styles.Event}>
          <div className={styles.LogoContainer}>
            <img className={styles.Logo} src={xavierLogo} />
          </div>
          <div className={styles.Blurb}>
            Sep 2001 - Jun 2005
            <br />New York, NY
              <p>
              Attended one of the top Jesuit schools in NYC. Here, I grew interested in programming through learning Macromedia Flash and participating in the school's first-ever Robotics course.
              </p>
          </div>
        </div>
      </div>
    </>
  )
}

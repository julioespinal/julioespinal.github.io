import React from 'react'

import SectionHeader from './SectionHeader'

import styles from './history_container.css'

import googleLogo from './assets/google.svg'
import intelLogo from './assets/intel.svg'
import miacLogo from './assets/miac.png'
import nsfLogo from './assets/nsf.svg'

export default function WorkSection() {
  return (
    <>
      <SectionHeader sectionName="Work Experience" />
      <div className={styles.History}>
        <div className={styles.Event}>
          <div className={styles.LogoContainer}>
            <img className={styles.Logo} src={googleLogo} />
          </div>
          <div className={styles.Blurb}>
            Jan 2017 - Present
            <br />New York, NY
              <p>
              I design and maintain tools, frameworks, and infrastructure that facilitate fast and easy feature development on Google Search.
              </p>
          </div>
        </div>

        <div className={styles.Event}>
          <div className={styles.LogoContainer}>
            <img className={styles.Logo} src={intelLogo} />
          </div>
          <div className={styles.Blurb}>
            Apr 2012 - Nov 2016
            <br />Hillsboro, OR
              <p>
              Worked on the DX9 user-mode driver for Intel HD and Iris Graphics across multiple hardware platforms. Led DX9 driver development for Skylake and Kabylake (Gen 9) architectures from early silicon to production hardware.
              </p>
          </div>
        </div>

        <div className={styles.Event}>
          <div className={styles.LogoContainer}>
            <img className={styles.Logo} src={nsfLogo} />
          </div>
          <div className={styles.Blurb}>
            Jun 2009 - Aug 2009
            <br />Rochester, NY
              <p>
              Student research project where I developed plugins that incorporated Renderman into Spiegel, a framework capable of visualizing scientific data.
              </p>
          </div>
        </div>

        <div className={styles.Event}>
          <div className={styles.LogoContainer}>
            <img className={styles.Logo} src={miacLogo} />
          </div>
          <div className={styles.Blurb}>
            Nov 2007 - Feb 2009,
            <br />Jul 2010 - Sep 2010
            <br />New York, NY
              <p>
              Internship role where I worked on features for mortgage valuation software.
              </p>
          </div>
        </div>
      </div>
    </>
  )
}
import React, { Component } from 'react'

import TitleSection from './TitleSection'
import WorkSection from './WorkSection'
import EducationSection from './EducationSection'
import ContactSection from './ContactSection'

import styles from './app.css'

class App extends Component {

  render() {
    return (
      <div className={styles.App}>
        <TitleSection />
        <WorkSection />
        <EducationSection />
        <ContactSection />
      </div>
    )
  }
}

export default App

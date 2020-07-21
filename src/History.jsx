import React from 'react'

import styles from './history_container.css'


export default function History(props) {
  return (
      <div className={styles.History}>props.children</div>
  )
}

export default function Event(props) {
  return (
    <div className={styles.Event}>
          <div className={styles.LogoContainer}>
            <img className={styles.Logo} src={ritLogo} />
          </div>
          <div className={styles.Blurb}>
            Aug 2005 - Apr 2012
              <p>
              Get that BS/MS in computer science with a focus on computer graphics.
              </p>
          </div>
        </div>

        <div className={styles.Event}>
          <div className={styles.LogoContainer}>
            <img className={styles.Logo} src={xavierLogo} />
          </div>
          <div className={styles.Blurb}>
            Sep 2001 - Jun 2005
              <p>
              And squeeze in that little anecdote from Xavier. Good times, indeed!
              </p>
          </div>
        </div>
      </div>
    </>
  )
}

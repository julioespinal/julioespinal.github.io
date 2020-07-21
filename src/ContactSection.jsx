import React, { useEffect, useState } from 'react'

import SectionHeader from './SectionHeader'
import ImageContainer from './ImageContainer'

import styles from './contact_section.css'

import facebookIcon from './assets/facebook.svg'
import linkedinIcon from './assets/linkedin.svg'
import gmailIcon from './assets/gmail.svg'

function SocialButton(props) {
  class SocialMediaInfo {
    constructor(iconPath, offsets, data) {
      this.iconPath = iconPath;
      this.offsets = offsets;
      this.data = data;
    }

    iconPath = '';
    offsets = [];
    data = [];
  }

  function build(o, ar) {
    var ret = ""
    for (var i = 0, j = 0; i < ar.length; ++i, ++j) {
      j %= o.length
      ret += String.fromCharCode(ar[i] - o[j])
    }

    return ret
  }

  function addLink(offsets, data, a, b, cond) {
    var id = a + b;
    var e = document.getElementById(id);
    var aTag = e.firstChild;

    aTag.onmouseover = function () {
      if (cond) {
        aTag.href = build(offsets, data)
        cond = false
      }
    }
  }

  const socials = {
    'em': new SocialMediaInfo(gmailIcon,
      [10, 803, -713, 962, 381, -588, 624, 281, 861, 384, 368, -730, 718],
      [119, 900, -608, 1070, 497, -477, 682, 382, 976, 496, 473, -620, 815,
        118, 849, -607, 1079, 489, -483, 735, 327, 958, 448, 471, -621, 815,
        115, 911, -667, 1061, 492, -479]),
    'li': new SocialMediaInfo(linkedinIcon,
      [736, 83, 408, -982, 566, -264, -669, 209, -116, -999, -652, 81, 362],
      [840, 199, 524, -870, 681, -206, -622, 256, 3, -880, -533, 127, 470, 841,
        193, 515, -881, 666, -159, -559, 255, -17, -888, -543, 128, 474, 853,
        181, 455, -876, 683, -156, -564, 320, -71, -898, -537, 193, 467, 846,
        180, 516, -935, 622, -166, -622, 265, -60, -947, -605, 134, 411, 789])
  };

  useEffect(() => {
    const social = socials[props.id];
    addLink(social.offsets, social.data, props.id[0], props.id[1], true);
  });

  return (
    <div id={props.id}>
      <a href=''>
        <ImageContainer containerStyleClass={styles.SocialIconContainer} imgStyleClass={styles.SocialIcon} src={socials[props.id].iconPath} />
      </a>
    </div>
  );
}

export default function ContactSection() {
  return (
    <>
      <SectionHeader sectionName="Contact" />
      <div className={styles.ContactSection}>
        <div className={styles.Buttons}>
          <SocialButton id='em' />
          <SocialButton id='li' />
        </div>
      </div>
    </>
  )
}

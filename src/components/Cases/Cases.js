import React from 'react'
import Case from '../Project/Project'
import IntroText from '../IntroText/IntroText'
import Project from '../Project/Project'

import './cases.css'

function Cases() {
  return (
    <div className="cases">
      <IntroText fontsize="7vw" color="rgb(32,32,32)" number="four" text="Geselecteerde Projecten"/>
      <Project />
    </div>
  )
}

export default Cases

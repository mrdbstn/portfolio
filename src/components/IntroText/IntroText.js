import React from 'react'
import "./IntroText.css"

function IntroText(props) {
  return (
    <div style={{color: props.color, fontSize: props.fontsize}} className={`introtext ${props.orientation} ${props.number}`}>
      <p> {props.text} </p>
    </div>
  )
}

export default IntroText

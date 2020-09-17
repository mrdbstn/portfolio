import React, { useState, useEffect } from "react";
import IntroText from "../IntroText/IntroText";
import "./hero.css";

function Hero() {
  return (
    <div className="hero__list" id="hero-list">
      <div className="arrow"> &#8595; </div>
      <IntroText text="Mourad" number="zero" />
      <IntroText text="Boustani" number="one" />
      <IntroText text="Webdesigner &" number="two" orientation="even" />
      <IntroText text="Developer" number="three" orientation="even" />
    </div>
  );
}

export default Hero;

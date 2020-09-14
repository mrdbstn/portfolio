import React from 'react';
import './App.css';
import "./components/IntroText/IntroText.css"

import IntroText from './components/IntroText/IntroText';
import Case from './components/Cases/Cases';

function App() {
  return (
    <div className="App">
      <div className="hero-list">
        <IntroText text="Mourad" number="zero"/>
        <IntroText text="Boustani" number="one" />
        <IntroText text="Webdesigner +" number="two" orientation="even"/>
        <IntroText text="Developer" number="three" orientation="even"/>
      </div>
      <div className="cases">
        <IntroText fontsize="8vw" color="rgb(32,32,32)" number="zero" text="Ik ben een freelancer die werkt voor uw resultaten:"/>
        <Case />
      </div>
      
    </div>
  );
}

export default App;

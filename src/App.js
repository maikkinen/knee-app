import './App.css'
import { useState } from 'react'
import { gsap } from 'gsap'
import { TimelineLite } from 'gsap/all'
import Knee from './Knee.js'

const App = () => {

  return (
    <div className="Content-wrapper-main">
      <span className="Knee" id="knee">
        <Knee />
      </span>
      <div className="Welcoming-text">
        <a className="App-link" href="/" rel="noopener noreferrer">Visit our Website</a>
        <button onClick={() => flexingQuadriceps()} className="Button-primary">Flex some Muscle</button>
        <button onClick={() => kneeAnimationMaster()} className="Button-primary">Show some Animation</button>
      </div>
    </div>
  );
}

const kneeAnimationMaster = () => {
  console.log('here')
  wiggleTibia()
  //bounce()
}


const flexingQuadriceps = () => {
  var Quadriceps = document.querySelector("#Quadriceps")
  var tl = new TimelineLite({});
  tl.to(Quadriceps, {
    scaleX: 0.95,
    duration: 1
  })

    .to(Quadriceps, {
      scaleX: 1.05,
      duration: 0.5
    })
    .to(Quadriceps, {
      scaleX: 1,
      duration: 1.75
    })
}

const wiggleTibia = () => {
  var Tibia = document.querySelector("#Tibia")

  gsap.timeline({
    //repeat: -1,
    defaults: { ease: 'elastic' }
  })
    .add('start cycle')
    .to(Tibia, {
      scale: 1.02,
      rotate: 1.05,
      transformOrigin: 'bottom right 20px',
      duration: 2.5,
    })
    .to(Tibia, {
      scale: 0.98,
      rotate: 0,
      duration: 3.5,
    })
}

const bounce = () => {
  var tl = new TimelineLite({
    repeat: -1
  });

  tl.add('bounce')
    .to('#knee', { y: '1rem', ease: "elastic.config(1.75, 0.3)", duration: 2.5 })
    .to('#knee', { y: '0', ease: "elastic.config(1.75, 0.3)", duration: 4 })
}



window.onload = () => {
  //wiggleTibia()
  //bounce()
}
/* 
Comment out some code? 
Shift + Alt + A */

export default App;

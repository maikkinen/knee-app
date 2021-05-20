import React from 'react'
import Knee from './Knee.js'
import { gsap } from 'gsap'
import { TimelineLite } from 'gsap/all'

import './App.css'


const HealthyKnee = () => {
  return (
    <div className="healthy-knee-page">
      <div className="info-text">
        Explore new means for overcoming pain in joints.
      </div>
      <div className="Knee" id="knee">
        <Knee />
      </div>
    </div>
  )
}


const kneeAnimationMaster = (bodypart, bodypart2) => {
  console.log('here')
  liftUpRight(bodypart);
  flexingQuadriceps(bodypart2);
  //bounce()
}

/**
 * 
 * <div className="Welcoming-text">
        <a className="App-link" href="/" rel="noopener noreferrer">Visit our Website</a>
        <button onClick={() => console.log("Click 1")} className="Button-primary">Reheumathoid Arthritis</button>
        <button onClick={() => console.log("Click 2")} className="Button-primary">Arthrosis</button>
      </div>
 */


const flexingQuadriceps = (bodypart) => {
  var tl = new TimelineLite({});
  tl.to(bodypart, {
    scaleX: 1.05,
    y: -50,
    duration: 0.5
  })
    .to(bodypart, {
      scaleX: 1,
      y: 0,
      duration: 1.75
    })
}

const liftUpRight = (bodypart) => {

  gsap.timeline({
    //repeat: -1,
    defaults: { ease: 'elastic' }
  })
    .add('start cycle')
    .to(bodypart, {
      scale: 1.02,
      rotate: 1.05,
      transformOrigin: 'bottom right 20px',
      duration: 2.5,
    })
    .to(bodypart, {
      scale: 0.98,
      rotate: 0,
      duration: 3.5,
    })
}

const bounceUp = () => {
  var tl = new TimelineLite({
    repeat: -1
  });

  tl.add('bounce-up')
    .to('#Femur', {
      y: '-0.75rem',
      ease: "elastic.config(1.75, 0.3)",
      duration: 3
    })
    .to('#Femur', {
      y: '0',
      ease: "elastic.config(1.75, 0.3)",
      duration: 3.5
    })
}

const bounceDown = () => {
  var tl = new TimelineLite({
    repeat: -1,
    delay: 0.6,
  });

  tl.add('bounce-down')
    .to('#LCL_x2C__articular_cart', {
      y: '0.55rem',
      ease: "elastic.config(1.75, 0.3)",
      duration: 2.5
    })
    .to('#LCL_x2C__articular_cart', {
      y: '0',
      ease: "elastic.config(1.75, 0.3)",
      duration: 4
    })
}

const stretchVertical = () => {
  var tl = new TimelineLite({
    repeat: -1,
  });

  tl.add('stretch-vertical')
    .to('#ACL_and_PCL', {
      scaleY: 1.05,
      y: '-0.25rem',
      ease: "elastic.config(1.75, 0.5)",
      duration: 2
    })
    .to('#ACL_and_PCL', {
      scaleY: 1,
      y: 0,
      ease: "elastic.config(1.75, 0.5)",
      duration: 5
    })
}

const moveUp = () => {
  var tl = new TimelineLite({
    repeat: -1,
    delay: 0.7
  });

  tl.to('#Fibula', {
    y: 10,
    scale: 1.02,
    duration: 3,
    ease: "elastic.config(1.75, 0.2)",
  })
  tl.to('#Fibula', {
    y: 0,
    scale: 1,
    duration: 4,
    ease: "elastic.config(1.75, 0.2)",
  })
}

const skewJoints = () => {
  var tl = new TimelineLite({
    repeat: -1,
    delay: 1,
    duration: 2,
    scaleX: 0.7
  });
  
  tl.to('#LCL_x2C__articular_cart', {
    scaleX: 0.5
  })
  tl.to('#LCL_x2C__articular_cart', {
    scaleX: 0.7
  })
}

window.onload = () => {
  bounceUp();
  bounceDown();
  stretchVertical();
  moveUp();
  skewJoints();
}

/* 
Comment out some code? 
Shift + Alt + A */

export default HealthyKnee
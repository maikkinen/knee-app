import React from 'react'
import KneeArthrosis from './KneeArthrosis'
import Knee from './Knee'
import { TimelineLite } from 'gsap/all'

import './App.css'


const Arthrosis = () => {
  return (
    <div className="healthy-knee-page">
      <div className="info-text">
        Explore new ways of curing pain in joints.
      </div>
      <div className="Knee" id="knee-arthrosis">
        <Knee  />
      </div>
    </div>
  )
}

/* Femur (top bone) skews smoothly to the right. */
const skewRightFemur = () => {
  var tl = new TimelineLite({
    repeat: -1,
  });

  tl.add('skew-femur')
    .from('#Femur', {
      y: '0',
      x: '0',
      rotate: '0deg'
    })
    .to('#Femur', {
      y: '1rem',
      x: '-0.5rem',
      ease: "bounce.in",
      duration: 3,
      transformOrigin: 'bottom',
      rotate: '7deg',
    })
    .to('#Femur', {
      y: '0',
      x: '0',
      ease: "elastic",
      duration: 3,
      transformOrigin: 'bottom',
      rotate: '0deg'
    })
}

const skewBackFemur = () => {
  var tl = new TimelineLite({
    repeat: -1,
    delay: 7.5
  });

  tl.add('skew-femur-back-effect')
    .to('#Femur', {
      x: '0.5rem',
      ease: "elastic",
      duration: 3,
      transformOrigin: 'bottom',
      rotate: '-2deg',
    })
    .to('#Femur', {
      x: '0',
      ease: "elastic",
      duration: 3,
      transformOrigin: 'bottom',
      rotate: '0deg'
    })
}

/* Corresponding coutnerpart to Tibia (lower bone). */
const skewTibia = () => {
  var tl = new TimelineLite({
    repeat: -1,
    delay: 2,
  });

  tl.add('skew-tibia')
    .from('#Tibia', {
      y: '-0.5rem',
      x: '0',
      rotate: '0deg'
    })
    .to('#Tibia', {
      y: '1rem',
      x: '-0.5rem',
      ease: "elastic.config(1.75, 0.3)",
      duration: 2,
      transformOrigin: 'center',
      rotate: '3deg',
    })
    .to('#Tibia', {
      y: '-0.5rem',
      x: '0',
      ease: "elastic.config(1.75, 0.3)",
      duration: 3,
      transformOrigin: 'center',
      rotate: '0deg'
    })
}

const skewRandomTibia = () => {
  var tl = new TimelineLite({
    repeat: -1,
    delay: 7.5,
  });

  tl.add('skew-back-tibia')
    .to('#Tibia', {
      y: '-1.5rem',
      x: '-0.5rem',
      ease: "elastic.config(1.75, 0.3)",
      duration: 1.5,
      transformOrigin: 'center',
      rotate: '-2deg',
    })
    .to('#Tibia', {
      y: '-0.5rem',
      x: '0',
      ease: "elastic.config(1.75, 0.3)",
      duration: 2.5,
      transformOrigin: 'center',
      rotate: '0deg'
    })
}

const stretchJoints = () => {
  var tl = new TimelineLite({
    repeat: -1,
  });

  tl.add('stretch-joints')
    .to('#Left-joint', {
      y: '-0.75rem',
      x: '-0.5rem',
      ease: "elastic.config(1.75, 0.3)",
      duration: 1.75,
      transformOrigin: 'bottom',
      rotate: '7deg',
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
    delay: 2,
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
    delay: 2
  });

  tl.to('#Fibula', {
    y: 25,
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

window.onload = () => {
  skewRightFemur();
  skewTibia();
  skewBackFemur();
  skewRandomTibia();
  //stretchJoints();
  bounceDown();
  stretchVertical();
  moveUp();
}

export default Arthrosis
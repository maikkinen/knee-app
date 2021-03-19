import './App.css'
import { gsap } from 'gsap'
import { TimelineLite } from 'gsap/all'
import Knee from './Knee.js'

const App = () => {

  const Femur = document.querySelector('#Femur');
  const ACL_and_PCL = document.querySelector('#ACL_and_PCL');
  const Tibia_and_joints = document.querySelector('#LCL_x2C__articular_cart');
  const Quadriceps = document.querySelector('#Quadriceps');
  const Patella = document.querySelector('#Patella');

  return (
    <div className="Content-wrapper-main">
      <span className="Knee" id="knee">
        <Knee />
      </span>
      <div className="Welcoming-text">
        <a className="App-link" href="/" rel="noopener noreferrer">Visit our Website</a>
        <button onClick={() => console.log("Cklick 1")} className="Button-primary">Call to Action</button>
        <button onClick={() => console.log("Click 2")} className="Button-primary">Something</button>
      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", function () {
  console.log('ok, ready')
});

const kneeAnimationMaster = (bodypart, bodypart2) => {
  console.log('here')
  liftUpRight(bodypart);
  flexingQuadriceps(bodypart2);

  //bounce()
}


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
      y: '0.75rem',
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

window.onload = () => {
  bounceUp();
  bounceDown();
  stretchVertical();
  moveUp();
}

/* 
Comment out some code? 
Shift + Alt + A */

export default App;

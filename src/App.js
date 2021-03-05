import KneeFront from './assets/KneeFront.svg'
import './App.css'
import { gsap } from 'gsap'
import { TimelineLite } from 'gsap/all'

const App = () => {
  return (
    <div className="Content-wrapper-main">
      <img id="knee" src={KneeFront} className="Knee" alt="knee" />
      <div className="Welcoming-text">
        <a className="App-link" href="/" rel="noopener noreferrer">Visit our Website</a>
        <button onClick={() => rotate()} className="Button-primary">Animate</button>
      </div>
    </div>
  );
}

const rotate = () => {
  console.log(1)
  var muscle = document.querySelector("#knee #Quadriceps")
  console.log(2)
  console.log("muscle", muscle)

  var tl = new TimelineLite({});
  tl.to(muscle, {
    scale: 2,
    rotate: 2,
    duration: 2
  })
  console.log(3)
}

const wiggle = () => {
  /*   gsap.from("#knee", {
      scale: 1,
      rotate: 0,
    })
    gsap.to("#knee", {
      scale: 1.1,
      rotate: 5,
      duration: 3,
      ease: 'elastic'
    }) */
  gsap.timeline({
    repeat: -1,
    defaults: { ease: 'elastic' }
  })
    .add('start cycle')
    .to("#knee", {
      scale: 1.02,
      rotate: 1.2,
      transformOrigin: 'bottom right 50px',
      duration: 4.5,
    })
    .to("#knee", {
      scale: 0.98,
      rotate: -1.15,
      duration: 3.5,
    })
}

const bounce = () => {
  var tl = new TimelineLite( {
    repeat: -1
  });

  tl.add('bounce')
    .to('#knee', { y: '1rem', ease: "elastic.config(1.75, 0.3)", duration: 2.5 })
    .to('#knee', { y: '0', ease: "elastic.config(1.75, 0.3)", duration: 4})
}



window.onload = () => {
  //wiggle()
  bounce()
}
/* 
Comment out some code? 
Shift + Alt + A */

export default App;

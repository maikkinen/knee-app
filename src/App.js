import KneeFront from './assets/KneeFront.svg'
import './App.css'
import { gsap } from 'gsap'

const App = () => {

  return (
    <div className="Content-wrapper-main">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <img id="knee" src={KneeFront} className="Knee" alt="knee" />
      <div className="Welcoming-text">
        <a
          className="App-link"
          href="/"
          //target="_blank"
          rel="noopener noreferrer"
        >
          Visit our Website
        </a>
        <button onClick={() => wiggle()} className="Button-primary">Animate</button>
      </div>
    </div>
  );
}

const wiggle = () => {
  gsap.from("#knee", {
    scale: 1,
    rotate: 0,
  })
  gsap.to("#knee", {
    scale: 1.1,
    rotate: 5,
    duration: 3,
    ease: 'elastic'
  })
}

export default App;

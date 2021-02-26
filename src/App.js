import KneeFront from './assets/KneeFront.svg'
import './App.css'
import { gsap } from 'gsap'

const App = () => {

  return (
    <div className="Content-wrapper-main">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <img id="knee" src={KneeFront} className="Knee" alt="knee" />
      <button onClick={() => wiggle()}>Text</button>
      <a
        className="App-link"
        href="/"
        //target="_blank"
        rel="noopener noreferrer"
      >
        Visit our Website
        </a>
    </div>
  );
}

const wiggle = () => {
  gsap.to("#knee", {
    rotation: "360",
    repeat: 1,
  })
}

export default App;

import logo from './logo.svg'
import KneeFront from './assets/KneeFront.svg'
import './App.css'

function App() {

  return (
    <div className="Content-wrapper-main">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <img src={KneeFront} className="Knee" alt="knee" />
      <div>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our Website
        </a>
      </div>
    </div>
  );
}

export default App;

import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HealthyKnee from './HealthyKnee.js'
import Arthrosis from './Arthrosis.js'
import Nav from './Nav.js'

const App = () => {

  return (
    <div className="Content-wrapper-main">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <HealthyKnee />
          </Route>
          <Route path="/arthrosis">
            <Arthrosis />
          </Route>
          <Route path="/arthritis">
            <Arthrosis />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;

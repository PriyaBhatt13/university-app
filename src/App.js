import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage';
import {UniversityDetails} from './Components/UniversityDetails/UniversityDetails';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/university/:id" component={UniversityDetails} />
          <Redirect to="/" />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

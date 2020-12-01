import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Activities from './Activities';
import '../index.css';
import MyRoutines from './MyRoutines'
import Routines from './Routines'
import MyActivities from './MyActivities';
// import { Router, Switch } from 'react-router-dom';

const App = () =>{
  return (
    <Router>
      <header>
        <Link to="/">Home</Link>
        <Link to="/MyActivities">My Activities</Link>
        <Link to="/MyRoutines">My Routines</Link>
      </header>
        <Switch>
          <Route exact path="/">
            <h1>Welcome tu your Fitness tracker App!</h1>
            <Activities />
            <Routines />
          </Route>
          <Route path="/Myactivities">
            <MyActivities />
          </Route>
            <Route exact path="/MyRoutines">
              <MyRoutines />
            </Route>
        </Switch>
    </Router>
  )
}

 export default App
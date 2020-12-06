import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getToken, clearToken, hitAPI } from "../api";
import Auth from "./Auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Activities from "./Activities";
import "../index.css";
import "./App.css";
import MyRoutines from "./MyRoutines";
import Routines from "./Routines";
import CreateNewActivity from "./CreateNewActivity";
// import { Router, Switch } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});
  const [activityList, setActivityList] = useState([]);
    const [routines, setRoutines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resp = await hitAPI("GET", "/users/me");
      const username = resp.username;

      const user = resp.id;
      setUser(user);
      setUsername(username);
    }
    fetchData();
  }, [isLoggedIn]);

  return (
    <Router>
      <header>
        <div className="headermessages">
          <h1 className="headertitle">Fitness Tracker</h1>
          <Link className="headerlink" to="/">
            Home
          </Link>
          <Link className="headerlink" to="/Activities">
            Activities
          </Link>
          <Link className="headerlink" to="/Routines">
            Routines
          </Link>
          {isLoggedIn ? (
            <Link to="/MyRoutines" className="header-link">
              <span className="routinelink">My Routines</span>
            </Link>
          ) : null}
        </div>
        <div className="app">
          {isLoggedIn ? (
            <>
              <div className="logout">
                <h3 className="loginMessage">Thanks for logging in!</h3>
                <span>
                  <button
                    className="logoutButton"
                    onClick={() => {
                      clearToken();
                      setIsLoggedIn(false);
                    }}
                  >
                    LOG OUT
                  </button>
                </span>
              </div>
            </>
          ) : (
            <Auth setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <h1>Welcome to your Fitness tracker App!</h1>
        </Route>
        <Route path="/Activities">
          {isLoggedIn ? <CreateNewActivity /> : null}
          <Activities />
        </Route>
        <Route exact path="/MyRoutines">
          <MyRoutines setRoutines={setRoutines}/>
        </Route>
        <Route exact path="/Routines">
          <Routines />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

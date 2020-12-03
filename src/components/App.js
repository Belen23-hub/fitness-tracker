import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { getToken, clearToken, hitAPI } from "../api";
import Auth from "./Auth";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Activities from "./Activities";
import "../index.css";
import MyRoutines from "./MyRoutines";
import Routines from "./Routines";
import MyActivities from "./MyActivities";
// import { Router, Switch } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});

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
        <Link to="/">Home</Link>
        <Link to="/MyActivities">My Activities</Link>
        <Link to="/MyRoutines">My Routines</Link>
        <div className="app">
          {isLoggedIn ? (
            <>
              <div className="logout">
                <h1 className="loginMessage">Thanks for logging in!</h1>
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
  );
};

export default App;

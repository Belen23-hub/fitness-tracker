import React, { useState } from "react";

import { auth } from "../api";

const Auth = (props) => {
  const { setIsLoggedIn, setUser } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <form className="log-in" onSubmit={(event) => event.preventDefault()}>
      <h3>Sign Up or Log In</h3>
      {errorMessage ? <h5 className="error">{errorMessage}</h5> : null}
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="username"
        className="login"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="password"
        className="login"
      />
      <button
        onClick={async (event) => {
          try {
            const result = await auth(username, password, true);
            console.log("result in registwer button", result);

            setIsLoggedIn(true);
          } catch (error) {
            setErrorMessage("User is not registered");
          }
        }}
      >
        Register
      </button>
      <button
        onClick={async () => {
          try {
            const result = await auth(username, password);
            console.log("result in log in button", result);
            setIsLoggedIn(true);
          } catch (error) {
            setErrorMessage("User name or password is incorrect.");
          }
        }}
      >
        Log In
      </button>
    </form>
  );
};

export default Auth;

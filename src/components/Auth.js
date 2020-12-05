import React, { useState } from "react";
import {auth} from '../api/index'

const Auth = (props) => {
  const { setIsLoggedIn } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState([]);

  return (
    <form className="log-in" onSubmit={(event) => event.preventDefault()}>
      <h3>Sign Up or Log In</h3>
      <h5 className="error">{message}</h5>
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
          event.preventDefault();
          try {
            const result = await auth(username, password, true);

            setIsLoggedIn(true);
            if (result.error) {
              setMessage(result.error);
              return <h3 className="error">{message}</h3>;
            } else {
              setIsLoggedIn(true);
              setMessage(result.message);
            }
            // console.log("result in registwer button", result);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        Register
      </button>
      <button
        onClick={async (event) => {
          event.preventDefault();
          try {
            const result = await auth(username, password);
            if (result.error) {
              setMessage(result.error);
              return <h3 className="error">{message}</h3>;
            } else {
              setIsLoggedIn(true);
              setMessage(result.message);
            }
            // console.log("result in log in button", result);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        Log In
      </button>
    </form>
  );
};

export default Auth;

import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './loginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const handleDemo = () => {
      return dispatch(sessionActions.loginDemo());
  }

  return (
    <div id="login-form-container">
      <h2 className="login-form-header" >Welcome Back!</h2>
      <form id='login-form' onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
            ))}
        </ul>
        <div id='username-container'>
          <label>
            Username or Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              />
          </label>
        </div>
        <div id="password-container">
          <label id="password-label">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
          </label>
        </div>
        <div id="login-buttons-container">
          <button id='demo-login-button' type="button" onClick={handleDemo}>Demo</button>
          <button id='login-submit-button' type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import CloseButton from '../assets/close_x_icon.png';
import './loginForm.css';

function LoginForm({setShowModal}) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

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
    <>
      <div id="login-form-container">
      <button className='modal-cancel-buttons' id='signup-cancel-button' onClick={() => setShowModal(false)}><img id='review-modal-close-image' src={CloseButton} alt='x'/></button>
        <form id='login-form' onSubmit={handleSubmit}>
        <h2 id="login-form-header" >Welcome Back!</h2>
          {showErrors && <ul id="login-error-list">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
              ))}
          </ul>}
          <div className='login-label-input-containers' id='username-container'>
            <label className='login-labels required'>
              Username or Email</label>
              <input
                className="login-inputs"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                />
          </div>
          <div className='login-label-input-containers' id="password-container">
            <label className='login-labels required' id="password-label">
              Password</label>
              <input
                className="login-inputs"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
          </div>
          <div className='login-label-input-containers' id="login-buttons-container">
            <button id='demo-login-button' type="button" onClick={handleDemo}>Demo</button>
            <button id='login-submit-button' onClick={() => setShowErrors(true)}type="submit">Log In</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import CloseButton from '../assets/close_x_icon.png';
import BackArrow from '../assets/back-arrow.png';
import './SignupForm.css';
import '../../context/ReviewModal.css';

export default function SignupForm({setShowModal}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);
  const [stepTwo, setStepTwo] = useState(false)

  useEffect(() => {
    const errors = []
    if(!username) errors.push('Username is required.')
    if(!email) errors.push('Email is required.')
    if(!bio) errors.push('Bio is required.')
    if(!profileImage) errors.push('Profile Image is required.')
    if(!password) errors.push('Password is required.')
    if(username.length > 30) errors.push('Username must be 30 characters or less.')
    if(email.length > 256) errors.push('Email must be 256 characters or less.')
    if(bio.length > 500) errors.push('Bio must be 500 characters or less.')
    if(password.length && password.length < 8) errors.push('Password must be at least 8 characters.')
    if(confirmPassword !== password) errors.push("Passwords must match")

    setErrors(errors)
  }, [username, email, bio, profileImage, password, confirmPassword])

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
      if(!errors.length){
        dispatch(sessionActions.signup({ email, username, bio, profileImage, password }))
      }
  };

  return (
    <>
    <div id="signup-form-container">
        {showErrors && <ul id="errors-list">
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}
      {!stepTwo ? <button className='modal-cancel-buttons' id='signup-cancel-button' onClick={() => setShowModal(false)}><img id='review-modal-close-image' src={CloseButton} alt='x'/></button> :
      <button className='modal-cancel-buttons' id='signup-cancel-button' onClick={() => setStepTwo(false)}><img id='review-modal-close-image' src={BackArrow} alt=''/></button>}
      {!stepTwo ? <h3 id="signup-step-header">Step One</h3> :
        <h3 id="signup-step-header">Step Two</h3>
        }
      <h2 id='signup-form-header'>Welcome to FloatBnB</h2>
      <form id='signup-form' onSubmit={handleSubmit}>
        {!stepTwo && <div id="signup-form-step-one"><div className="signup-label-input-containers">
        <label className="signup-labels required">Username</label>
          <input
            className="signup-inputs"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="signup-label-input-containers">
        <label className="signup-labels required">Email</label>
          <input
            className="signup-inputs"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="signup-label-input-containers">
        <label className="signup-labels required">Bio</label>
          <textarea
            id="signup-bio-input"
            className="signup-inputs"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            />
        </div>
        </div>}
        {stepTwo && <div id="signup-form-step-two">
        <div className="signup-label-input-containers">
        <label className="signup-labels required">Profile Image</label>
          <input
            className="signup-inputs"
            type='text'
            onChange={(e) => setProfileImage(e.target.value)}
            />
        </div>
        <div className="signup-label-input-containers">
        <label className="signup-labels required">Password</label>
          <input
            className="signup-inputs"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className="signup-label-input-containers">
        <label className="signup-labels required">Confirm Password</label>
          <input
            className="signup-inputs"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </div>
        </div>}
        {!stepTwo ? <button id='signup-button' type="button" onClick={() => setStepTwo(true)}>Next</button> :
          <button id='signup-button' onClick={() => setShowErrors(true)} type="submit">Continue</button>}
      </form>
    </div>
  </>
  );
}

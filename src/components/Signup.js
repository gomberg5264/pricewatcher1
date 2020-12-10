import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setPassword, setEmail, setPhone } from '../reducers/signupReducer';
import { useHistory, Link } from 'react-router-dom';
import userService from '../services/user';
import { setUser, setLoggedIn } from '../reducers/userReducer';
import watcherService from '../services/watcher';
import './Signup.css';

export default function Signup() {
  const signup = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const history = useHistory();

  const [signupBtnText, setSignupBtnText] = useState('Signup');
  const [errorMsgText, setErrorMsgText] = useState('');

  const handleUserNameChange = (e) => {
    dispatch(setUserName(e.target.value));
  };
  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };
  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const handlePhoneChange = (e) => {
    dispatch(setPhone(e.target.value));
  };

  const checkValidationAndSubmit = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (signup.userName.length < 4) {
      return setErrorMsgText('Username must be greater than or equal to 4 characters');
    } else if (signup.password.length < 8) {
      return setErrorMsgText('Password must be greater than or equal to 8 characters');
    } else if (!re.test(String(signup.email).toLowerCase())) {
      return setErrorMsgText('Email address must be valid');
    } else if (isNaN(signup.phone) || signup.phone.length !== 10) {
      return setErrorMsgText('Phone number must be a number of 10 digits');
    } else {
      handleSignup();
    }
  };

  const handleSignup = async () => {
    const credentials = {
      userName: signup.userName,
      password: signup.password,
      email: signup.email,
      phone: signup.phone,
    };
    setSignupBtnText('Signing up');
    try {
      const res = await userService.signupHandler(credentials);
      dispatch(setUser(res.userInfo));
      dispatch(setLoggedIn());
      watcherService.setToken(res.token);
      window.localStorage.setItem('loggedUser', JSON.stringify(res));
      history.push('/watchers');
    } catch (err) {
      setErrorMsgText(err);
      setSignupBtnText('Signup');
    }
  };

  return (
    <div className="signup-div">
      <div className="signup-container">
        <h1>Signup</h1>
        <div className="signup-input-wrapper">
          <label>Username:</label>
          <input
            type="text"
            className="inputText"
            onChange={handleUserNameChange}
            value={signup.userName}
          />
        </div>
        <div className="signup-input-wrapper">
          <label>Password:</label>
          <input
            type="text"
            className="inputText"
            value={signup.password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="signup-input-wrapper">
          <label>Email:</label>
          <input
            type="text"
            className="inputText"
            value={signup.email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="signup-input-wrapper">
          <label>Phone:</label>
          <input
            type="text"
            className="inputText"
            value={signup.phone}
            onChange={handlePhoneChange}
          />
        </div>
        <button className="btn signup-btn" onClick={checkValidationAndSubmit}>
          {signupBtnText}
        </button>
        <div className="signup-error-msg">{errorMsgText}</div>
        <div className="loginText">
          Already a user
          <Link to="/login" className="loginTextLink loginText">
            {' Login'}
          </Link>
        </div>
      </div>
    </div>
  );
}

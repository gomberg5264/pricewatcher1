import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setPassword } from '../reducers/loginReducer';
import { setUser, setLoggedIn } from '../reducers/userReducer';
import userService from '../services/user';
import watcherService from '../services/watcher';
import { useHistory, Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  const login = useSelector((state) => state.login);
  const user = useSelector((state) => state.User);

  const dispatch = useDispatch();
  const history = useHistory();

  const [loginBtnText, setLoginBtnText] = useState('Login');
  const [errorMsgText, setErrorMsgText] = useState('');

  useEffect(() => {
    if (user.isLoggedIn) {
      history.push('/watchers');
    }
  }, [user.isLoggedIn, history]);

  const handleUserNameChange = (e) => {
    dispatch(setUserName(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginBtnText('Logging in...');
    const credentials = {
      userName: login.userName,
      password: login.password,
    };
    console.log(credentials);
    try {
      const res = await userService.loginHandler(credentials);
      watcherService.setToken(res.token);
      window.localStorage.setItem('userlogged', JSON.stringify(res));
      dispatch(setUser(res.userInfo));
      dispatch(setLoggedIn());
      console.log(res);
      history.push('/watchers');
    } catch (err) {
      console.log(err);
      setLoginBtnText('Login');
      setErrorMsgText('Username or Password is incorrect');
    }
  };

  return (
    <div className="loginDiv">
      <div className="loginContainer">
        <h1>Login</h1>
        <div className="inputSet">
          <label>Username</label>
          <input
            type="text"
            onChange={handleUserNameChange}
            value={login.userName}
            className="inputText"
          />
        </div>

        <div className="inputSet">
          <label>Password</label>
          <input
            type="text"
            onChange={handlePasswordChange}
            value={login.password}
            className="inputText"
          />
        </div>
        <button onClick={handleLogin} className="btn loginbtn">
          {loginBtnText}
        </button>
        <div className="login-error-msg">{errorMsgText}</div>
        <div className="loginText">
          Not a user
          <Link to="/signup" className="loginTextLink loginText">
            {' Signup'}
          </Link>
        </div>
      </div>
    </div>
  );
}

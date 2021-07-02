import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

function Login() {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [disableButton, setDisableButton] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const verifyloginInfo = () => {
    const { email, password } = loginInfo;
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setDisableButton(true);
      return;
    }
    if (password.length < 6) {
      setDisableButton(true);
      return;
    }
    setDisableButton(false);
  };

  useEffect(() => {
    verifyloginInfo();
  }, [loginInfo]);

  const handleChange = ({ target: { name, value } }) => (
    setLoginInfo({ ...loginInfo, [name]: value })
  );

  const handleClick = () => {
    if (!localStorage.getItem('heroList')) {
      localStorage.setItem('heroList', JSON.stringify([]));
    }
    setRedirect(true);
  };

  if (redirect) return <Redirect to="/home" />;
  return (
    <main>
      <h1>Super Heroes List</h1>
      <section>
        <h3>Login</h3>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </label>
          <button
            type="button"
            disabled={disableButton}
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      </section>
      <section>
        <p>Not registered?</p>
        <Link to="/register"><p>Register here!</p></Link>
      </section>
    </main>
  );
}

export default Login;

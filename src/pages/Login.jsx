import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from '../CSS/S.Login';
import logo from '../images/superheroeslogo.png';

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
    <S.Main>
      <S.Section>
        <S.Img src={logo} alt="Logo Super Heroes List" />
        <S.DivInputs>
          <S.Input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <S.Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <S.Button
            type="button"
            disabled={disableButton}
            style={{ 'background-color': ((disableButton) ? 'gray' : 'red') }}
            onClick={handleClick}
          >
            Login
          </S.Button>
        </S.DivInputs>
        <S.SLink to="/register"><p>Not registered? Click here!</p></S.SLink>
      </S.Section>
    </S.Main>
  );
}

export default Login;

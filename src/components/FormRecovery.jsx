import React, { useState, useEffect, useContext } from 'react';
import * as S from '../CSS/S.FormLogin';
import { loginUser } from '../services/api';
import myContext from '../context/AppContext';

function FormRecovery () {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [disableButton, setDisableButton] = useState(true);
  const { setRedirect, setLogin, setFormsLogin } = useContext(myContext);

  const verifyloginInfo = () => {
    const { email } = loginInfo;
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setDisableButton(true);
      return;
    }
    setDisableButton(false);
  };

  useEffect(() => {
    verifyloginInfo();
  }, [loginInfo]);

  // useEffect(() => {
  //   if (controle) return recoveryPassWord(loginInfo.email);
  // }, []);

  const handleChange = ({ target: { name, value } }) => (
    setLoginInfo({ ...loginInfo, [name]: value })
  );

  const handleClick = async () => {
    if (!localStorage.getItem('heroList')) {
      localStorage.setItem('heroList', JSON.stringify([]));
    }
    const result = await loginUser(loginInfo);
    if (result.err) return setErrorMessage(result.err);
    localStorage.setItem('shlToken', JSON.stringify(result.token));

    setRedirect(false);
    setLogin(true);
  };

  return (
    <S.DivInputs>
      <S.Input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <S.SLink onClick={ () => setFormsLogin(false) } ><p>Miss click? Ok, return to login!</p></S.SLink>
      <S.Button
        type="button"
        disabled={disableButton}
        style={{ 'background-color': ((disableButton) ? 'gray' : 'red') }}
        onClick={handleClick}
      >
        Recovery
      </S.Button>
      <S.SLink to="/register"><p>Not registered? Click here!</p></S.SLink>
    </S.DivInputs>
  );
}

export default FormRecovery;

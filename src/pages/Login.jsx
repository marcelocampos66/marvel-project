import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from '../CSS/S.Login';
import logo from '../images/superheroeslogo.png';
import ErrorMessage from '../components/ErrorMessage';
import myContext from '../context/AppContext';
import FormLogin from '../components/FormLogin';
import FormRecovery from '../components/FormRecovery';

function Login() {
  const { errorMessage, login, formsLogin } = useContext(myContext);

  if (login) return <Redirect to="/home" />;

  return (
    <S.Main>
      <S.Section>
        <S.Img src={logo} alt="Logo Super Heroes List" />
        {
          formsLogin
          ? <FormRecovery />
          : <FormLogin />
        }
      </S.Section>
      {
        errorMessage && <ErrorMessage />
      }
    </S.Main>
  );
}

export default Login;

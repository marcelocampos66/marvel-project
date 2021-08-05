import React, { useContext, useState } from 'react';
import ErrorImg from '../images/error.png';
import * as S from '../CSS/S.ErrorMessage';
import { Redirect } from 'react-router';
import myContext from '../context/AppContext';
import { formInitialState } from '../context/Provider';

const ErrorMessage = () => {
  const [redirect, setRedirect] = useState(false);
  const { errorMessage, setErrorMessage, setFormData } = useContext(myContext);
  const { type, message } = errorMessage;

  const returnToLogin = () => {
    setErrorMessage('');
    // setFormData(formInitialState);
    setRedirect(true);
  }

  const retryRegister = () => {
    setErrorMessage('');
  }

  return(
    <S.Section>
      <S.DivError>
        <S.Img src={ErrorImg} alt="Ícone de error" />
        <S.DivMessages>
          <S.P>{`Error type: ${ type }`}</S.P>
          <S.P>{`Message: ${ message }`}</S.P>
        </S.DivMessages>
      </S.DivError>
      <S.DivButtons>
        <S.Button onClick={ () => returnToLogin() }>Back to login</S.Button>
        <S.Button onclick={ () => retryRegister() }>Adjust values</S.Button>
      </S.DivButtons>
      {
        redirect && <Redirect to="/" />
      }
    </S.Section>
  );
};

export default ErrorMessage;

import React, { useState, useEffect, useContext } from 'react';
import * as S from '../CSS/S.Register';
import register from '../images/becomeamember.png';
import { registerNewUser } from '../services/api';
import ErrorMessage from '../components/ErrorMessage';
import myContext from '../context/AppContext';
import formValidator from '../helpers/formValidator';
import { Redirect } from 'react-router-dom';
import { formInitialState } from '../context/Provider';
import renderInput from '../helpers/renderInput';

function Register() {
  const [disableButton, setDisableButton] = useState(true);
  const { setErrorMessage, formData, setFormData, redirect, setRedirect } = useContext(myContext);

  const registerUser = async () => {
    const token = await registerNewUser(formData);
    console.log(token);
    if (token.err) {
      setErrorMessage(token.err);
      setFormData({ ...formData, error: token.err })
      return;
    }
    if (token.error) {
      setErrorMessage(token.error);
      setFormData({ ...formData, error: token.error })
      return;
    }
    localStorage.setItem('shltoken', JSON.stringify(token));
    setFormData(formInitialState);
    setRedirect(true);
  };

  const validateForm = () => {
    const verify = formValidator(formData);
    setDisableButton(verify);
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const temrText = 'I agree with the terms';

  if (redirect) return <Redirect to='/' />;

  return (
    <S.Main>
      <S.Img src={register} alt="Become a member" />
      <S.Form>
        {renderInput('text', 'name', 'Name')}
        {renderInput('number', 'age', 'Age')}
        {renderInput('text', 'email', 'Email')}
        {renderInput('password', 'password', 'Password')}
        {renderInput('checkbox', 'terms', temrText)}
      </S.Form>
      <S.Button
        type="submit"
        disabled={disableButton}
        style={{ 'background-color': ((disableButton) ? 'gray' : 'red') }}
        onClick={ () => registerUser() }
      >
        Register now!
      </S.Button>
      {
        formData.error && <ErrorMessage />
      }
    </S.Main>
  );
}

export default Register;

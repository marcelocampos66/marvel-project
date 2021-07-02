import React, { useState, useEffect } from 'react';
import * as S from '../CSS/S.Register';
import register from '../images/becomeamember.png';

const initialState = {
  name: '',
  age: '',
  email: '',
  password: '',
  terms: false,
};

function Register() {
  const [formData, setFormData] = useState(initialState);
  const [disableButton, setDisableButton] = useState(true);

  const verifyFormData = () => {
    const {
      name, age, email, password, terms,
    } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    if (name.length < 3) {
      setDisableButton(true);
      return;
    }
    if (age < 12) {
      setDisableButton(true);
      return;
    }
    if (!emailRegex.test(email)) {
      setDisableButton(true);
      return;
    }
    if (password.length < 6) {
      setDisableButton(true);
      return;
    }
    if (!terms) {
      setDisableButton(true);
      return;
    }
    setDisableButton(false);
  };

  useEffect(() => {
    verifyFormData();
  }, [formData]);

  const handleChange = ({ target: { name, value, checked } }) => {
    if (name === 'terms') {
      setFormData({ ...formData, [name]: checked });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const renderInput = (type, nameInput, labelText) => (
    <S.DivInput
      direction={type === 'checkbox' ? 'row' : 'column'}
      align={type === 'checkbox' ? 'center' : 'stretch'}
    >
      <S.Label
        htmlFor={nameInput}
        className={type === 'checkbox' ? 'checkbox' : 'others'}
      >
        {`${labelText}:`}
      </S.Label>
      <S.Input
        type={type}
        id={nameInput}
        name={nameInput}
        value={formData[nameInput]}
        larguraMin={type === 'checkbox' ? '20px' : '100px'}
        largura={type === 'checkbox' ? '20px' : '90%'}
        onChange={handleChange}
        className={type === 'checkbox' ? 'checkbox' : 'others'}
      />
    </S.DivInput>
  );

  const temrText = 'I agree with the terms';

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
        onClick={() => {}}
      >
        Register now!
      </S.Button>
    </S.Main>
  );
}

export default Register;

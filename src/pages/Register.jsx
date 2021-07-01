import React, { useState, useEffect } from 'react';

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
    <label htmlFor={nameInput}>
      {`${labelText}:`}
      <input
        type={type}
        id={nameInput}
        name={nameInput}
        value={formData[nameInput]}
        onChange={handleChange}
      />
    </label>
  );

  const temrText = 'I agree with the terms';

  return (
    <main>
      <h1>Register</h1>
      <form>
        {renderInput('text', 'name', 'Name')}
        {renderInput('number', 'age', 'Age')}
        {renderInput('text', 'email', 'Email')}
        {renderInput('password', 'password', 'Password')}
        {renderInput('checkbox', 'terms', temrText)}
      </form>
      <button
        type="submit"
        disabled={disableButton}
        onClick={() => {}}
      >
        Register now!
      </button>
    </main>
  );
}

export default Register;

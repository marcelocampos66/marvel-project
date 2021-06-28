import React from 'react';

function InputText({ change, value, placeholder }) {
  return (
    <input
      type="text"
      onChange={ change }
      value={ value }
      placeholder={ placeholder }
    />
  );
}

export default InputText;

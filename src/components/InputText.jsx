import React from 'react';
import PropTypes from 'prop-types';
import * as S from '../CSS/S.InputText';

function InputText({ change, value, placeholder }) {
  return (
    <S.Input
      type="text"
      onChange={change}
      value={value}
      placeholder={placeholder}
    />
  );
}

InputText.propTypes = {
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputText;

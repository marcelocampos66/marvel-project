import React from 'react';
import PropTypes from 'prop-types';

function InputText({ change, value, placeholder }) {
  return (
    <input
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

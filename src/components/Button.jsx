import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, click }) {
  return (
    <button
      type="button"
      name={text}
      onClick={click}
    >
      { text }
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default Button;

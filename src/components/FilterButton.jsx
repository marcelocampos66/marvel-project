import React from 'react';
import PropTypes from 'prop-types';

function FilterButton({ text, click }) {
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

FilterButton.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default FilterButton;

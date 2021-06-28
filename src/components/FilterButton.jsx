import React from 'react'

function FilterButton({ text, click }) {
  return (
    <button
      type="button"
      name={ text }
      onClick={ click }
    >
      { text }
    </button>
  );
}

export default FilterButton;

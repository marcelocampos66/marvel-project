import React from 'react';
import PropTypes from 'prop-types';

function SelectFilter({ list, onChange }) {
  return (
    <div>
      <select onChange={onChange}>
        {
          list.map((item) => (
            <option
              key={item}
            >
              {item}
            </option>
          ))
        }
      </select>
    </div>
  );
}

SelectFilter.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectFilter;

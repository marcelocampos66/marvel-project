import React from 'react';
import PropTypes from 'prop-types';

function SelectFilter({ list }) {
  return (
    <div>
      <select>
        {
          list.map((item) => (
            <option key={item}>{item}</option>
          ))
        }
      </select>
    </div>
  );
}

SelectFilter.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectFilter;

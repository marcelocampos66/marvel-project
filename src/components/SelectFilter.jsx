import React from 'react';
import PropTypes from 'prop-types';
import * as S from '../CSS/S.SelectFilter';

function SelectFilter({ list, onChange }) {
  return (
    <S.Section>
      <S.Select onChange={onChange}>
        {
          list.map((item) => (
            <S.Option
              key={item}
            >
              {item}
            </S.Option>
          ))
        }
      </S.Select>
    </S.Section>
  );
}

SelectFilter.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectFilter;

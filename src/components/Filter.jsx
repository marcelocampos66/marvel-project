import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import { compareAZ, compareZA } from '../helpers/sortBy';
import SelectFilter from './SelectFilter';
import * as S from '../CSS/S.Filter';

function Filter({ clear }) {
  const [asc, setAsc] = useState(false);
  const [powerAsc, setPowerAsc] = useState(false);
  const {
    myList, setMyList, change, setChange, backupList,
  } = useContext(AppContext);

  const sortAspectsOptions = ['Aspects', 'Height', 'Weight', 'Strength', 'Intelligence', 'Power', 'Speed', 'Durability', 'Combat'];
  const sortAlignmentsOptions = ['Alignment', 'Good', 'Neutral', 'Bad'];

  const convertToNumber = (string) => {
    const number = (string.split(' ')[0]);
    return parseInt(number, 10);
  };

  const handleSortBy = ({ target: { name } }) => {
    switch (name) {
      case 'A-Z':
        myList.sort((a, b) => compareAZ(a, b));
        setAsc(!asc);
        break;
      case 'Z-A':
        myList.sort((a, b) => compareZA(a, b));
        setAsc(!asc);
        break;
      case 'powerAsc':
        myList.sort((a, b) => a.overall - b.overall);
        setPowerAsc(!powerAsc);
        break;
      case 'powerDesc':
        myList.sort((a, b) => b.overall - a.overall);
        setPowerAsc(!powerAsc);
        break;
      default:
        break;
    }
    setChange(!change);
  };

  const aspects = {
    Height: () => myList
      .sort((a, b) => convertToNumber(b.appearance.height[1])
      - convertToNumber(a.appearance.height[1])),
    Weight: () => myList
      .sort((a, b) => convertToNumber(b.appearance.weight[1])
      - convertToNumber(a.appearance.weight[1])),
    Strength: () => myList
      .sort((a, b) => convertToNumber(b.powerstats.strength)
      - convertToNumber(a.powerstats.strength)),
    Intelligence: () => myList
      .sort((a, b) => convertToNumber(b.powerstats.intelligence)
      - convertToNumber(a.powerstats.intelligence)),
    Power: () => myList
      .sort((a, b) => convertToNumber(b.powerstats.power)
      - convertToNumber(a.powerstats.power)),
    Speed: () => myList
      .sort((a, b) => convertToNumber(b.powerstats.speed)
      - convertToNumber(a.powerstats.speed)),
    Durability: () => myList
      .sort((a, b) => convertToNumber(b.powerstats.durability)
      - convertToNumber(a.powerstats.durability)),
    Combat: () => myList
      .sort((a, b) => convertToNumber(b.powerstats.combat)
      - convertToNumber(a.powerstats.combat)),
    Good: () => setMyList(
      backupList
        .filter(({ biography: { alignment } }) => alignment === 'good'),
    ),
    Neutral: () => setMyList(
      backupList
        .filter(({ biography: { alignment } }) => alignment === 'neutral' || alignment === '-'),
    ),
    Bad: () => setMyList(
      backupList
        .filter(({ biography: { alignment } }) => alignment === 'bad'),
    ),
  };

  const handleChange = ({ target: { value } }) => {
    if (value === 'Aspects' || value === 'Alignment') return;
    aspects[value]();
    setChange(!change);
  };

  return (
    <S.FilterSection>
      <S.H3>Order by:</S.H3>
      <S.ButtonFilterContainer>
        <S.ButtonFilter
          type="button"
          name={asc ? 'A-Z' : 'Z-A'}
          onClick={handleSortBy}
        >
          {asc ? 'A-Z' : 'Z-A'}
        </S.ButtonFilter>
        <S.ButtonFilter
          type="button"
          name={powerAsc ? 'powerAsc' : 'powerDesc'}
          onClick={handleSortBy}
        >
          {!powerAsc ? 'Powerfull' : 'Power Asc'}
        </S.ButtonFilter>
      </S.ButtonFilterContainer>
      <S.SelectFilterContainer>
        <SelectFilter
          list={sortAspectsOptions}
          onChange={handleChange}
        />
        <SelectFilter
          list={sortAlignmentsOptions}
          onChange={handleChange}
        />
      </S.SelectFilterContainer>
      <S.ClearFiltersButtonContainer>
        <S.ButtonClearFilter
          type="button"
          onClick={() => clear()}
        >
          Clear Filters
        </S.ButtonClearFilter>
      </S.ClearFiltersButtonContainer>
      <S.Hr/>
    </S.FilterSection>
  );
}

Filter.propTypes = {
  clear: PropTypes.func.isRequired,
};

export default Filter;

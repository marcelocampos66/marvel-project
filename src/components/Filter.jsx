import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import { compareAZ, compareZA } from '../helpers/sortBy';
import SelectFilter from './SelectFilter';

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

  const handleChange = ({ target: { value } }) => {
    switch (value) {
      case 'Height':
        myList
          .sort((a, b) => convertToNumber(b.appearance.height[1])
          - convertToNumber(a.appearance.height[1]));
        break;
      case 'Weight':
        myList
          .sort((a, b) => convertToNumber(b.appearance.weight[1])
          - convertToNumber(a.appearance.weight[1]));
        break;
      case 'Strength':
        myList
          .sort((a, b) => convertToNumber(b.powerstats.strength)
          - convertToNumber(a.powerstats.strength));
        break;
      case 'Intelligence':
        myList
          .sort((a, b) => convertToNumber(b.powerstats.intelligence)
          - convertToNumber(a.powerstats.intelligence));
        break;
      case 'Power':
        myList
          .sort((a, b) => convertToNumber(b.powerstats.power)
          - convertToNumber(a.powerstats.power));
        break;
      case 'Speed':
        myList
          .sort((a, b) => convertToNumber(b.powerstats.speed)
          - convertToNumber(a.powerstats.speed));
        break;
      case 'Durability':
        myList
          .sort((a, b) => convertToNumber(b.powerstats.durability)
          - convertToNumber(a.powerstats.durability));
        break;
      case 'Combat':
        myList
          .sort((a, b) => convertToNumber(b.powerstats.combat)
          - convertToNumber(a.powerstats.combat));
        break;
      case 'Good':
        setMyList(
          backupList
            .filter(({ biography: { alignment } }) => alignment === 'good'),
        );
        break;
      case 'Neutral':
        setMyList(
          backupList
            .filter(({ biography: { alignment } }) => alignment === 'neutral'),
        );
        break;
      case 'Bad':
        setMyList(
          backupList
            .filter(({ biography: { alignment } }) => alignment === 'bad'),
        );
        break;
      default:
        break;
    }
    setChange(!change);
  };

  return (
    <section>
      <p>Order by:</p>
      <button
        type="button"
        name={asc ? 'A-Z' : 'Z-A'}
        onClick={handleSortBy}
      >
        {asc ? 'A-Z' : 'Z-A'}
      </button>
      <button
        type="button"
        name={powerAsc ? 'powerAsc' : 'powerDesc'}
        onClick={handleSortBy}
      >
        {!powerAsc ? 'Powerfull' : 'Power Asc'}
      </button>
      <SelectFilter
        list={sortAspectsOptions}
        onChange={handleChange}
      />
      <SelectFilter
        list={sortAlignmentsOptions}
        onChange={handleChange}
      />
      <div>
        <button
          type="button"
          onClick={() => clear()}
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
}

Filter.propTypes = {
  clear: PropTypes.func.isRequired,
};

export default Filter;

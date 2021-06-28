import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import FilterButton from '../components/FilterButton';
import InputText from '../components/InputText';

function Search() {
  const { heroes, setHeroes } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target: { value } }) => setInputValue(value);

  const handleClick = ({ target: { name } }) => {
    if (name === 'Search') {
      const lowerCaseInput = inputValue.toLowerCase();
      const result = heroes
        .filter(({ name }) => name.toLowerCase().includes(lowerCaseInput));
      setHeroes(result);
    }
    if (name === 'All') {
      console.log('Clicou no All');
    }
    if (name === 'Powerfull') {
      console.log('Clicou no Powerfull');
    }
  };

  const placeholderText = 'Search by character name...';

  return (
    <section>
      <div>
        { <InputText change={handleChange} value={ inputValue } placeholder={ placeholderText } /> }
        { <FilterButton text="Search" click={ handleClick } /> }
      </div>
      <div>
        { <FilterButton text="All" click={ handleClick } /> }
        { <FilterButton text="Powerfull" click={ handleClick } /> }
      </div>
    </section>
  );
}

export default Search;

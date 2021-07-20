import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import Button from './Button';
import InputText from './InputText';
import { searchHeroesByName, getAPageOfHeroes } from '../services/api';

function Search() {
  const { setHeroes } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target: { value } }) => setInputValue(value);

  const handleClick = async ({ target: { name } }) => {
    if (name === 'Search') {
      const lowerCaseInput = inputValue.toLowerCase();
      const result = await searchHeroesByName(lowerCaseInput);
      setHeroes(result);
    }
    if (name === 'All') {
      const pageOfHeroes = await getAPageOfHeroes(1);
      setHeroes(pageOfHeroes);
    }
    if (name === 'Powerfull') {
      console.log('Clicou no Powerfull');
    }
  };

  const placeholderText = 'Search by character name...';

  return (
    <section>
      <div>
        <InputText change={handleChange} value={inputValue} placeholder={placeholderText} />
        <Button text="Search" click={handleClick} />
      </div>
      <div>
        <Button text="All" click={handleClick} />
        <Button text="Powerfull" click={handleClick} />
      </div>
    </section>
  );
}

export default Search;

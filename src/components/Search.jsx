import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import Button from './Button';
import InputText from './InputText';
import { searchHeroesByName, getAPageOfHeroes } from '../services/api';
import * as S from '../CSS/S.Search';
import Plus from '../images/plus.png';

function Search() {
  const { setHeroes, setShowSearch, setLoading, setShowPageNavigation } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target: { value } }) => setInputValue(value);

  const handleClick = async () => {
    // if (name === 'Search') {
    setLoading(true);
    const lowerCaseInput = inputValue.toLowerCase();
    const result = await searchHeroesByName(lowerCaseInput);
    if (result.type === 'string_empty') {
      setHeroes([]);
      setLoading(false);
      return;
    }
    setHeroes(result);
    setShowPageNavigation(false);
    setLoading(false);
    // }
    // if (name === 'All') {
    //   setLoading(true);
    //   const token = JSON.parse(localStorage.getItem('shlToken'));
    //   const pageOfHeroes = await getAPageOfHeroes(1, token);
    //   setHeroes(pageOfHeroes);
    //   setLoading(false);
    // }
    // if (name === 'Powerfull') {
    //   console.log('Clicou no Powerfull');
    // }
    setShowSearch(false);
  };

  const placeholderText = 'Search by name...';

  return (
    <S.Section>
      <S.Div>
        <InputText
          change={handleChange}
          value={inputValue}
          placeholder={placeholderText}
        />
        {/* <S.Button click={handleClick} /> */}
        <S.DivImg
          onClick={ () => handleClick() }
        >
          <S.Img src={Plus} alt="sinal de mais" />
        </S.DivImg>
      </S.Div>
      {/* <S.Div>
        <Button text="All" click={handleClick} />
        <Button text="Powerfull" click={handleClick} />
      </S.Div> */}
    </S.Section>
  );
}

export default Search;

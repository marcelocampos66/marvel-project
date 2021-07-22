import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import ListCharacters from '../components/ListCharacters';
import Button from '../components/Button';
import AppContext from '../context/AppContext';
import SelectFilter from '../components/SelectFilter';
import { getMyListOfHeroes } from '../services/api';
import { compareAZ, compareZA } from '../helpers/sortBy';
import * as S from '../CSS/S.HeroesList';

const initialState = {
  renderDrop: false,
};

function HeroesList() {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [change, setChange] = useState(false);
  const { myList, setMyList, showSearch } = useContext(AppContext);

  const handleSortBy = ({ target: { name } }) => {
    setState(initialState);
    switch (name) {
      case 'A-Z':
        myList.sort((a, b) => compareAZ(a, b));
        break;
      case 'Power':
        myList.sort((a, b) => compareZA(a, b));
        break;
      default:
        break;
    }
    setChange(!change);
  };

  const getMyList = async () => {
    const ids = JSON.parse(localStorage.getItem('heroList'));
    const result = await getMyListOfHeroes(JSON.stringify({ ids }));
    setMyList(result);
    setLoading(false);
  };

  useEffect(() => {
    getMyList();
  }, []);

  useEffect(() => {}, [change]);

  if (loading) return <p>Loading...</p>;

  const { renderDrop } = state;

  return (
    <main>
      <Header />
      { !showSearch && (
        <S.Section>
          <p>Heroes List</p>
          <p>Order by:</p>
          <Button text="A-Z" click={handleSortBy} />
          <Button text="Power" click={handleSortBy} />
          <Button text="Aspects" click={handleSortBy} />
          <Button text="Filter" click={handleSortBy} />
          { renderDrop && <SelectFilter /> }
        </S.Section>
      )}
      <ListCharacters type="favorite" />
    </main>
  );
}

export default HeroesList;

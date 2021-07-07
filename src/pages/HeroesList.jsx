import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import ListCharacters from '../components/ListCharacters';
import Button from '../components/Button';
import AppContext from '../context/AppContext';
import SelectFilter from '../components/SelectFilter';
import { compareAZ, compareZA } from '../helpers/sortBy';

const initialState = {
  renderDrop: false,
};

function HeroesList() {
  const [state, setState] = useState(initialState);
  const [change, setChange] = useState(false);
  const { myList } = useContext(AppContext);

  // const ids = JSON.parse(localStorage.getItem('heroList'));
  // console.log(myList.sort());

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

  useEffect(() => {}, [change]);

  const { renderDrop } = state;

  return (
    <main>
      <section>
        <Header />
        <p>Heroes List</p>
        <p>Order by:</p>
        <Button text="A-Z" click={handleSortBy} />
        <Button text="Power" click={handleSortBy} />
        <Button text="Aspects" click={handleSortBy} />
        <Button text="Filter" click={handleSortBy} />
        { renderDrop && <SelectFilter /> }
      </section>
      <ListCharacters type="favorite" />
    </main>
  );
}

export default HeroesList;

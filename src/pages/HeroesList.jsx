import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import ListCharacters from '../components/ListCharacters';
import Filter from '../components/Filter';
import Loading from '../components/Loading';
import AppContext from '../context/AppContext';
import { getMyListOfHeroes } from '../services/api';

function HeroesList() {
  const [loading, setLoading] = useState(false);
  const { setMyList, showSearch, setBackupList } = useContext(AppContext);

  const getMyList = async () => {
    setLoading(true);
    const ids = JSON.parse(localStorage.getItem('heroList'));
    const result = await getMyListOfHeroes(JSON.stringify({ ids }));
    setMyList(result);
    setBackupList(result);
    setLoading(false);
  };

  useEffect(() => {
    getMyList();
  }, []);

  if (loading) return <Loading />;

  return (
    <main>
      <Header />
      <p>Heroes List</p>
      { !showSearch && <Filter clear={getMyList} /> }
      <ListCharacters type="favorite" />
    </main>
  );
}

export default HeroesList;

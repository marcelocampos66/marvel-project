import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import ListCharacters from '../components/ListCharacters';
import Filter from '../components/Filter';
import Loading from '../components/Loading';
import myContext from '../context/AppContext';
import { getMyListOfHeroes, deleteHeroOfList } from '../services/api';

function HeroesList() {
  const [loading, setLoading] = useState(false);
  const { myList, setMyList, showSearch, setBackupList } = useContext(myContext);
  
  const getMyList = async () => {
    setLoading(true);
      
    const token = JSON.parse(localStorage.getItem('shlToken'));

    const result = await getMyListOfHeroes(token);
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

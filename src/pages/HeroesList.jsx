import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import ListCharacters from '../components/ListCharacters';
import Filter from '../components/Filter';
import Loading from '../components/Loading';
import myContext from '../context/AppContext';
import { getMyListOfHeroes, deleteHeroOfList } from '../services/api';
import * as S from '../CSS/S.HeroesList';

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
    <S.Main>
      <Header />
      { !showSearch && <Filter clear={getMyList} /> }
      <ListCharacters type="favorite" />
    </S.Main>
  );
}

export default HeroesList;

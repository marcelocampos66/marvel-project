import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import ListCharacters from '../components/ListCharacters';
import AppContext from '../context/AppContext';
import { getAPageOfHeroes, getMyListOfHeroes } from '../services/api';
import PageNavegation from '../components/PageNavegation';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';
import * as S from '../CSS/S.Home';

function Home() {
  const { setLogin, setHeroes, setMyList, page, redirect, setRedirect, showPageNavigation, loading, setLoading } = useContext(AppContext);

  const fetchPage = async (indexNumber) => {
    setLoading(true);

    const token = JSON.parse(localStorage.getItem('shlToken'));
    const pageOfHeroes = await getAPageOfHeroes(indexNumber, token);

    if (pageOfHeroes.type === 'invalid_token') {
      setRedirect(true);
      return;
    };
    const myList = await getMyListOfHeroes(token);
    setHeroes(pageOfHeroes);
    setMyList(myList);
    window.scrollTo(0, 0);
    setLoading(false);
  };

  useEffect(() => {
    fetchPage(page);
    setLogin(false);
  }, [page]);

  if (redirect) return <Redirect to='/' />;

  return (
    <S.Main>
      <Header />
      {
        loading ? <Loading /> : <ListCharacters type="All" />
      }
      {showPageNavigation && <PageNavegation />}
    </S.Main>
  );
}

export default Home;

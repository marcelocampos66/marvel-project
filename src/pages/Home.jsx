import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import ListCharacters from '../components/ListCharacters';
import AppContext from '../context/AppContext';
import { getAPageOfHeroes, getMyListOfHeroes } from '../services/api';
import PageNavegation from '../components/PageNavegation';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

function Home() {
  const [loading, setLoading] = useState(false);
  const { setHeroes, setMyList, page, redirect, setRedirect } = useContext(AppContext);

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
    setLoading(false);
  };

  useEffect(() => {
    fetchPage(page);
  }, [page]);

  if (redirect) return <Redirect to='/' />;
  if (loading) return <Loading />;

  return (
    <main>
      <Header />
      <ListCharacters type="All" />
      <PageNavegation />
    </main>
  );
}

export default Home;

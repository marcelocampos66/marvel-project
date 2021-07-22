import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import ListCharacters from '../components/ListCharacters';
import AppContext from '../context/AppContext';
import { getAPageOfHeroes } from '../services/api';
import PageNavegation from '../components/PageNavegation';

function Home() {
  const [loading, setLoading] = useState(false);
  const { setHeroes, page } = useContext(AppContext);

  const fetchPage = async (indexNumber) => {
    setLoading(true);
    const pageOfHeroes = await getAPageOfHeroes(indexNumber);
    setHeroes(pageOfHeroes);
    setLoading(false);
  };

  useEffect(() => {
    fetchPage(page);
  }, [page]);

  const h1Loading = <h1>Loading...</h1>;
  if (loading) return h1Loading;
  return (
    <main>
      <Header />
      <ListCharacters type="All" />
      <PageNavegation />
    </main>
  );
}

export default Home;

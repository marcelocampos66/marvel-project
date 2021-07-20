import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import ListCharacters from '../components/ListCharacters';
import Search from '../components/Search';
import AppContext from '../context/AppContext';
import { getAPageOfHeroes } from '../services/api';

function Home() {
  const [loading, setLoading] = useState(false);
  const {
    showSearch, setHeroes,
    page, setPage,
  } = useContext(AppContext);

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
      {
        showSearch && <Search />
      }
      <ListCharacters type="All" />
      <div>
        <button
          type="button"
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <span>{page}</span>
        <button
          type="button"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default Home;

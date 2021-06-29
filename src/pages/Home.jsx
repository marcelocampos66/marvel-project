import React, { useContext } from 'react';
import Header from '../components/Header';
import ListCharacters from '../components/ListCharacters';
import Search from '../components/Search';
import AppContext from '../context/AppContext';

function Home() {
  const { showSearch } = useContext(AppContext);

  return (
    <main>
      <Header />
      {
        showSearch && <Search />
      }
      <ListCharacters />
    </main>
  );
}

export default Home;

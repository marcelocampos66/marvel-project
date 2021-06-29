import React, { useContext } from 'react';
import Header from '../components/Header.jsx';
import ListCharacters from '../components/ListCharacters';
import Search from '../components/Search';
import AppContext from '../context/AppContext';
// import * as S from '../CSS/S.Home';

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

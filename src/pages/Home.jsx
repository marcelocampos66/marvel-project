import React, { useContext } from 'react';
import Header from '../components/Header.jsx';
import ListCharacters from '../components/ListCharacters';
import Search from '../components/Search';
import AppContext from '../context/AppContext';
// import * as S from '../CSS/S.Home';

function Home() {
<<<<<<< HEAD
  const result = getCharactersById(498);
  console.log(result);
=======
  const { showSearch } = useContext(AppContext);

>>>>>>> 92acba403da79652c63e1b71d2a5ca6a0584b8d6
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

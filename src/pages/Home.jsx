import React, { useContext } from 'react';
import Header from '../components/Header';
import ListCharacters from '../components/ListCharacters';
import Search from '../components/Search';
import AppContext from '../context/AppContext';

function Home() {
<<<<<<< HEAD

=======
>>>>>>> 2a5482395833dcd0fd29f37cc5caa7822e87fa5f
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

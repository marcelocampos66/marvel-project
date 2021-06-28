import React from 'react';
import Header from '../components/Header.jsx';
import { getCharactersById } from '../services/api';

function Home() {
  const result = getCharactersById(498);
  console.log(result);
  return (
    <main>
      <Header />
      <p>Home</p>
    </main>
  );
}

export default Home;

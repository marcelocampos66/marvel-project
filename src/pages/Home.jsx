import React from 'react';
import Header from '../components/Header.jsx';
import { getCharactersById } from '../services/api';

function Home() {
  getCharactersById(498);
  return (
    <main>
      <Header />
      <p>Home</p>
    </main>
  );
}

export default Home;

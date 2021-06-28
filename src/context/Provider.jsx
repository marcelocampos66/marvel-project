import React, { useState } from 'react';
import AppContext from './AppContext';
import { data } from '../data/mock';

function Provider({ children }) {
  const [heroes, setHeroes] = useState(data);
  const [showSearch, setShowSearch] = useState(false);

  const contextValue = {
    showSearch,
    setShowSearch,
    heroes,
    setHeroes,
  };

  return (
    <AppContext.Provider value={ contextValue } >
      { children }
    </AppContext.Provider>
  );
}

export default Provider;

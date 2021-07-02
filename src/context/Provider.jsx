import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import { data, list } from '../data/mock';

function Provider({ children }) {
  const [heroes, setHeroes] = useState(data);
  const [myList, setMyList] = useState(list);
  const [showSearch, setShowSearch] = useState(false);

  const contextValue = {
    showSearch,
    setShowSearch,
    heroes,
    setHeroes,
    myList,
    setMyList,
  };

  return (
    <AppContext.Provider value={contextValue}>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

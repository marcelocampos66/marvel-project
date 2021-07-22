import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(1);
  const [myList, setMyList] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const contextValue = {
    showSearch,
    setShowSearch,
    showMenu,
    setShowMenu,
    heroes,
    setHeroes,
    myList,
    setMyList,
    page,
    setPage,
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

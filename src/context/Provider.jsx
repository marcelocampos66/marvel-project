import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export const formInitialState = {
  name: '',
  age: '',
  email: '',
  password: '',
  terms: false,
  error: '',
  image: '',
};

function Provider({ children }) {
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(1);
  const [myList, setMyList] = useState([]);
  const [backupList, setBackupList] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [change, setChange] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [errorMessage, setErrorMessage] = useState();
  const [formData, setFormData] = useState(formInitialState);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPageNavigation, setShowPageNavigation] = useState(true);

  const contextValue = {
    change,
    setChange,
    showSearch,
    setShowSearch,
    showMenu,
    setShowMenu,
    heroes,
    setHeroes,
    myList,
    setMyList,
    backupList,
    setBackupList,
    page,
    setPage,
    quantity,
    setQuantity,
    errorMessage,
    setErrorMessage,
    formData,
    setFormData,
    redirect,
    setRedirect,
    loading,
    setLoading,
    showPageNavigation,
    setShowPageNavigation,
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

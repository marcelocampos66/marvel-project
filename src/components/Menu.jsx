import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import * as S from '../CSS/S.Menu';

function Menu() {
  const { setShowMenu, redirect, setRedirect, setPage } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem('shlToken')
    setRedirect(true);
  };

  const goHome = () => {
    setPage(1);
    setShowMenu(false);
  };
  
  if (redirect) return <Redirect path="/" />;
  return (
    <S.Main>
      <S.LINK to="/home" onClick={() => goHome()}>Home</S.LINK>
      <S.LINK to="/heroes-list" onClick={() => setShowMenu(false)}>My List</S.LINK>
      <S.LINK to="/profile" onClick={() => setShowMenu(false)}>Profile</S.LINK>
      <S.LINK onClick={() => logout()}>Logout</S.LINK>
      {/* <S.LINK to="/add-hero" onClick={() => setShowMenu(false)}>Add Hero</S.LINK> */}
    </S.Main>
  );
}

export default Menu;

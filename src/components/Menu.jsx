import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import * as S from '../CSS/S.Menu';

function Menu() {
  const [logout, setLogout] = useState(false);
  const { setShowMenu } = useContext(AppContext);

  if (logout) return <Redirect path="/" />;
  return (
    <S.Main>
      <S.LINK to="/profile" onClick={() => setShowMenu(false)}>Profile</S.LINK>
      <S.LINK to="/heroes-list" onClick={() => setShowMenu(false)}>My List</S.LINK>
      <S.LINK to="/add-hero" onClick={() => setShowMenu(false)}>Add Hero</S.LINK>
      <S.LINK to="/home" onClick={() => setShowMenu(false)}>Search</S.LINK>
      <S.LINK onClick={() => setShowMenu(false) && setLogout(true)}>Logout</S.LINK>
    </S.Main>
  );
}

export default Menu;

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from '../CSS/S.Menu';

function Menu() {
  const [logout, setLogout] = useState(false);

  if (logout) return <Redirect path="/" />;
  return (
    <S.Main>
      <S.LINK to="/profile">Profile</S.LINK>
      <S.LINK to="/heroes-list">My List</S.LINK>
      <S.LINK to="/add-hero">Add Hero</S.LINK>
      <S.LINK to="/home">Search</S.LINK>
      <S.LINK onClick={() => setLogout(true)}>Logout</S.LINK>
    </S.Main>
  );
}

export default Menu;

import React from 'react';
import marvelLogo from '../images/marvel-logo.png';
import menuIcon from '../images/menu.png';
import lupa from '../images/lupa-white.png';
import * as S from '../CSS/S.Header';

function Header() {
  return (
    <S.Header>
      <S.Img src={ menuIcon } alt="Ícone de Menu" />
      <S.Img src={ marvelLogo } alt="Logo da Marvel" />
      <S.Img src={ lupa } alt="Ícone de Lupa" />
    </S.Header>
  );
}

export default Header;

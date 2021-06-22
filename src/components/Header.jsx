import React from 'react';
import { Link } from 'react-router-dom';
import marvelLogo from '../images/marvel-logo.png';
import menuIcon from '../images/menu.png';
import lupa from '../images/lupa-white.png';
import * as S from '../CSS/S.Header';

function Header() {
  return (
    <S.Header>
      <S.DivButton>
        <S.Img src={ menuIcon } alt="Ícone de Menu" />
      </S.DivButton>
      <S.DivButton>
        <Link to='/'>
          <S.Img 
            style={{ border: '1px solid white' }}
            src={ marvelLogo }
            alt="Logo da Marvel"
          />
        </Link>
      </S.DivButton>
      <S.DivButton>
        <Link to='/search'>
          <S.Img src={ lupa } alt="Ícone de Lupa" />
        </Link>
      </S.DivButton>
    </S.Header>
  );
}

export default Header;

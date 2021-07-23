import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Search from './Search';
import Menu from './Menu';
import SHLlogo from '../images/superheroesshl.png';
import menuIcon from '../images/menu.png';
import lupa from '../images/lupa-white.png';
import * as S from '../CSS/S.Header';

function Header() {
  const {
    showSearch, setShowSearch,
    showMenu, setShowMenu,
  } = useContext(AppContext);

  const handleShowMenuAndSearch = (key) => {
    if (key === 'showSearch') {
      setShowSearch(!showSearch);
      setShowMenu(false);
    }
    if (key === 'showMenu') {
      setShowMenu(!showMenu);
      setShowSearch(false);
    }
  };

  const handleGoHomePage = () => {
    setShowSearch(false);
    setShowMenu(false);
  };

  return (
    <S.Main>
      <S.Header>
        <S.DivButton onClick={() => handleShowMenuAndSearch('showMenu')}>
          <S.Img src={menuIcon} alt="Ícone de Menu" />
        </S.DivButton>
        <S.DivButton>
          <Link to="/home" onClick={() => handleGoHomePage()}>
            <S.Img
              src={SHLlogo}
              alt="Logo da Marvel"
            />
          </Link>
        </S.DivButton>
        <S.DivButton onClick={() => handleShowMenuAndSearch('showSearch')}>
          <S.Img src={lupa} alt="Ícone de Lupa" />
        </S.DivButton>
      </S.Header>
      { showSearch && <Search /> }
      { showMenu && <Menu /> }
    </S.Main>
  );
}

export default Header;

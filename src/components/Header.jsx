import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Search from './Search';
import Menu from './Menu';
import SHLlogo from '../images/superheroesshl.png';
import menuIcon from '../images/menu.png';
import lupa from '../images/lupa-white.png';
import * as S from '../CSS/S.Header';
import { getAPageOfHeroes } from '../services/api';

function Header() {
  const {
    showSearch, setShowSearch,
    showMenu, setShowMenu,
    setShowPageNavigation,
    setLoading, setHeroes,
    page,
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

  const handleGoHomePage = async () => {
    setLoading(true);
    setShowSearch(false);
    setShowMenu(false);
    const token = JSON.parse(localStorage.getItem('shlToken'));
    const pageOfHeroes = await getAPageOfHeroes(page, token);
    setHeroes(pageOfHeroes);
    setShowPageNavigation(true);
    setLoading(false);
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

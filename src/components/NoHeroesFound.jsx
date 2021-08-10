import React, { useContext, useEffect } from 'react';
import * as S from '../CSS/S.NoHeroesFound';
import message from '../images/noHeroesFound.png';
import AppContext from '../context/AppContext';

function NoHeroesFound() {
  const { setShowPageNavigation, setShowSearch } = useContext(AppContext);

  const handleNotFound = () => {
    setShowPageNavigation(false);
    setShowSearch(false);
  };

  useEffect(() => {
    handleNotFound();
  }, []);
  
  return (
    <S.Main>
      <S.Img src={message} alt="Heroes not found"/>
    </S.Main>
  );
};

export default NoHeroesFound;

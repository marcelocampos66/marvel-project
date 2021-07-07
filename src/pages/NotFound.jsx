import React from 'react';
import Header from '../components/Header';
import error404Img from '../images/error404.png';
import notFoundImg from '../images/notfound.png';
import celestialsImg from '../images/celestials.jpg';
import * as S from '../CSS/S.NotFound';

function NotFound() {
  return (
    <S.Main>
      <Header />
      <S.ContainerSection>
        <S.MessageSection>
          <S.MessageImg
            src={error404Img}
            alt="error 404"
          />
          <S.MessageImg
            src={notFoundImg}
            alt="Not found"
          />
        </S.MessageSection>
        <S.CelestialSection>
          <S.CelestialImg
            src={celestialsImg}
            alt="celestials"
          />
        </S.CelestialSection>
      </S.ContainerSection>
    </S.Main>
  );
}

export default NotFound;

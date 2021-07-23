import React from 'react';
import * as S from '../CSS/S.Loading';
import loading from '../images/loading.png';

function Loading() {
  return (
    <S.Main>
      <S.Img src={loading} alt="Imagem de loading" />
    </S.Main>
  );
}

export default Loading;

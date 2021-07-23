import React from 'react';
import * as S from '../CSS/S.Profile';
import noUserImg from '../images/no-user-image.jpg';

function Profile() {
  return (
    <S.Main>
      <p>Olá usuário estranho</p>
      <S.UserSection>
        <S.UserImg
          src={noUserImg}
          alt="user"
        />
        <S.UserInfoDiv>
          <p>Nome</p>
          <p>Idade</p>
          <p>Email</p>
        </S.UserInfoDiv>
      </S.UserSection>
    </S.Main>
  );
}

export default Profile;

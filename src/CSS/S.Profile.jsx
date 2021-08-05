import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 5% 0;
  align-items: center;
`;

export const UserSection = styled.div`
  height: 25vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 40%;
  margin: 10%;
`;

export const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
`;

export const Form = styled.form`
`;

export const EditButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditButton = styled.button`
  width: 150px;
`;

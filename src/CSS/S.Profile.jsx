import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  // justify-content: space-bet;
`;

export const H1 = styled.h1`
  margin: 10vh 0 2vh 0;
`;

export const H2 = styled.h2`
  margin-top: 0vh;
`;

export const H3 = styled.h3`
  margin-top: 0vh;
`;

export const H4 = styled.h4`
  margin-top: 0vh;
`;

export const UserSection = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImg = styled.img`
  height: 30vh;
  margin: 5%;
`;

export const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  height: 10vh;
  margin-top: 5vh;
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
  min-width: 150px;
  height: 40px;
  width: 20%;
  background-color: ${(prop) => prop.type ? "red" : "black" };
  border-radius: 10px;
  margin-right: ${(prop) => prop.type ? "5%" : 0 };
  color: white;
  font-size: 1.2em;
`;

export const SubmitButton = styled.button`
  min-width: 150px;
  height: 40px;
  width: 20%;
  background-color: black;
  border-radius: 10px;
  color: white;
  font-size: 1.2em;
`;

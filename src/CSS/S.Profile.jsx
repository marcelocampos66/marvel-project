import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
`;

export const H1 = styled.h1`
  margin: 10vh 0 0 0;
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
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const UserImg = styled.img`
  margin: 5% 0 3% 0;
  height: 35vh;
`;

export const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 10%;

  @media(min-width: 1024px) {
    margin-top: 2%;
  }
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

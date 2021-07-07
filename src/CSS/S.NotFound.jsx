import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;

  @media(min-width: 601px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }
`;

export const MessageSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 25vh;
  justify-content: center;
  align-items: center;
  padding: 10px;


  @media(min-width: 601px) {
    width: 30%;
    height: 80vh;
  }
`;

export const MessageImg = styled.img`
  width: 80%;
  max-width: 450px;

  @media(min-width: 601px) {
    width: 90%;
    margin: 15px;
  }
`;

export const CelestialSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media(min-width: 601px) {
    width: 40%;
    height: 80vh;
  }
`;

export const CelestialImg = styled.img`
  width: 90%;
  align-self: center;
  max-width: 400px;

  @media(min-width: 601px) {
    width: 100%;
    align-self: left;
  }
`;

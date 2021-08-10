import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  height: 100vh;
  width: 100vw;
  
  @media(min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between;
    width: 100vw;
    margin: 0;
    padding: 0;
    // margin: 50px 0;
  }
`;

export const HeroSec = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3% 5%;

  @media(min-width: 1024px) {
    width: 40vw;
    align-self: flex-start;
    padding: 0;
  }
`;

export const H1Tittle = styled.h1`
  margin: 0 0 3% 0;

  @media(min-width: 1024px) {
    margin: 0;
  }
`;

export const Hero = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  padding: 2%;

  @media(min-width: 1024px) {
    padding: 0;
  }
`;

export const HeroImg = styled.img`
  height: 22vh;

  @media(min-width: 1024px) {
    height: 35vh;
  }
`;

export const OverallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 22vh;
`;

export const OverallImg = styled.img`
  width: 70%;
  margin: 0 0 5% 0;

  @media(min-width: 1024px) {
    margin: 0;
  }
`;

export const MainInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 0;

  @media(min-width: 1024px) {
    width: 40vw;
  }
`;

export const InfoP = styled.p`
  margin: 5px 15px;

  @media(min-width: 1024px) {
    margin: 0;
  }
`;

export const BiographySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 0;

  @media(min-width: 1024px) {
    width: 40vw;
  }
`;

export const InfosContainer = styled.div`
  margin: 3% 0;
  display: flex;
  flex-direction: column;

  @media(min-width: 1024px) {
    margin: 0;
  }
`;

export const StatusSection = styled.section`
display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media(min-width: 1024px) {
    width: 40vw;
  }

`;

export const PowerStatusDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 3% 5%;
  
  @media(min-width: 601px) {
    background-color: green;
  }

  @media(min-width: 1024px) {
    background-color: red;
    width: 40vw;
    padding: 0;
  }
`;

export const StatusDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 15vh;
  align-items: center;
  justify-content: center;
  padding: 3%;

  @media(min-width: 601px) {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin: 0 2%;
  }

  @media(min-width: 1024px) {
    width: 30vw;
    max-width: 90px;
    margin: 0;
    padding: 0;
  }
`;

export const StatusImg = styled.img`
  max-width: 80px;
  width: 100%;
    
  @media(min-width: 601px) {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin: 0 2%;
  }

  @media(min-width: 1024px) {
    width: 100%;
    max-width: 100px;
    height: auto;
    margin: 0 2%;
  }
`;

export const H4status = styled.h4`
  padding: 0;
  margin: 0 0 5% 0;
  font-size: 1.0em;

  @media(min-width: 1024px) {
    margin: 0;
  }
`;

export const H4tittle = styled.h3`
  color: white;
  align-self: center;
`;

export const Dropdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  width: 90%;
  height: 50px;
  padding: 0 5%;

  @media(min-width: 601px) {

  }

  @media(min-width: 1024px) {
    width: 40vw;
    height: auto;
    padding: 0;
  }
`;

export const Arrow = styled.img`
  height: 35px;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 5px;
  width: 200px;
  height: 5vh;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  margin: 10px 40vw;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

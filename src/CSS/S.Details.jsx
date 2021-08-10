import styled, { keyframes } from 'styled-components';
import { fadeIn, slideInDown, zoomInDown, pulse } from 'react-animations';

const zoomInDownEffect = keyframes`${zoomInDown}`;
const slideInDownEffect = keyframes`${slideInDown}`;
const fadeInEffect = keyframes`${fadeIn}`;
const pulseEffect = keyframes`${pulse}`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  height: 100vh;
  width: 100%;
  
  @media(min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-evenly;
    margin-top: 80px;
  }
`;

export const HeroSec = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3% 5%;

  animation: 1s ${fadeInEffect};

  @media(min-width: 1024px) {
    width: 45%;
    padding: 0;
  }
`;

export const H1Tittle = styled.h1`
  margin: 0 0 3% 0;

  @media(min-width: 1024px) {
    font-size: 1.5em;
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
  justify-content: space-around;
  width: 50%;
  height: 22vh;

  @media(min-width: 1024px) {
    height: 35vh;
    align-items: center;
    justify-content: space-around;
  }
`;

export const OverallImg = styled.img`
  width: 70%;
  margin: 0 0 5% 0;

  @media(min-width: 1024px) {
    width: 60%;
  }
`;

export const MainInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 0;

  animation: 1s ${zoomInDownEffect};

  @media(min-width: 1024px) {
    width: 45%;
    height: auto;
    min-height: 50vh;
  }
`;

export const InfoP = styled.p`
  margin: 5px 15px;

  @media(min-width: 1024px) {
    margin: 4px 15px;
  }
`;

export const BiographySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 0;

  animation: 1s ${zoomInDownEffect};

  @media(min-width: 1024px) {
    width: 45%;
    height: auto;
    min-height: 50vh;
  }
`;

export const InfosContainer = styled.div`
  margin: 3% 0;

  animation: 1s ${fadeInEffect};

  @media(min-width: 1024px) {
    margin: 20px;
    width: 100%;
    height: 100%;
    // padding: 
  }
`;

export const StatusSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  
  animation: 1s ${zoomInDownEffect};

  @media(min-width: 1024px) {
    width: 45%;
    margin-bottom: 50px;
  }
`;

export const PowerStatusDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 3% 5%;
  box-sizing: border-box;

  animation: 1s ${fadeInEffect};

  @media(min-width: 1024px) {
    width: 100%;
    flex-wrap: wrap;
    padding: 0% 5%;
    // align-items: start;
    justify-content: space-between;
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
    height: 20vh;
    width: 30%;
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
    margin: 0;
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
  margin-left: 5%;
`;

export const Dropdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  width: 90%;
  height: 50px;
  padding: 0 5%;

  @media(min-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 0;
  }
`;

export const Arrow = styled.img`
  height: 35px;
`;

export const ButtonDivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 5px;
  width: 80%;
  height: 5vh;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  margin: 20px 0;

  &:active {
    animation: 0.5s ${pulseEffect};
  }

  @media(min-width: 1024px) {
    width: 30%;
    height: 6vh;
    font-size: 1em;
  }
`;

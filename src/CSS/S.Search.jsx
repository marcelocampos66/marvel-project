import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';
import Plus from '../images/plus.png';

const slide = keyframes`${slideInRight}`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15vh;
  background-color: black;

  animation: 0.5s ${slide};
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
  background-color: white;
  width: 85%;
  border-radius: 15px;
  padding-left: 2%;

  @media(min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const DivImg = styled.div`
  display: flex;
  border: 0px solid;
  border-radius: 0 5px 5px 0;
  height: 5vh;
  width: 25%;
  padding: 2px 0;
  justify-content: center;
  align-items: center;

  @media(min-width: 1024px) {
    justify-self: end;
    justify-content: flex-end;
    align-items: center;
    width: 15%;
  }
`;

export const Img = styled.img`
  height: 7vh;

  @media(min-width: 1024px) {
    justify-self: end;
  }
`;

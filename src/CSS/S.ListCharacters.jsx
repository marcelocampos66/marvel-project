import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const effect = keyframes`${zoomIn}`;

export const Section = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  width: 100vw;
`;

export const DivContent = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
`;

export const Hr = styled.hr`
  width: 100%;
`;

export const Img = styled.img`
  height: 90%;
  width: 85px;
  margin: 0 2%

// @media(min-width: 601px) {
//   width: 85px;
//   // width: auto;
//   height: 90%;
//   margin: 0 2%;
// }
`;

export const P = styled.p`
  color: black;
  font-size: 12px;
`;

export const SLink = styled(Link)`
  text-decoration: none;
`;

export const DivCard = styled.div`
  max-width: 100%;
  width: 100%;
  height: 22vh;

  animation: 0.5s ${effect};

  @media(min-width: 601px) {
    width: 100%;
    height: 22vh;
    max-width: 31%;
    justify-self: start;
    margin: 0 1%;
  }
`;

export const DivFlexStart = styled.div`
  flex-direction: column;
  flex-wrap: nowrap;
  width: 85vw;

  @media(min-width: 601px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const DivText = styled.div`
  padding: 5px;

  @media(min-width: 601px) {
    margin-left: 5%;
  }
`;

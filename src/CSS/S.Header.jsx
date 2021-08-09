import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const pulseEffect = keyframes`${pulse}`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
`;

export const Img = styled.img`
  height: 90%;

  &:hover {
    animation: 0.5s ${pulseEffect};
  }
`;

export const DivButton = styled.div`
  height: 80%;
  margin: 0 5%;
  border: 1px solid black;

  &:hover {
    border: 1px solid gray;
    cursor: pointer;
    animation: 0.5s ${pulseEffect};
  }
`;

export const Header = styled.header`
  background-color: black;
  height: 10vh;
  max-height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

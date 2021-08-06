import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 3;
`;

export const Img = styled.img`
  animation: ${rotate} 1s linear infinite;
`;

export const test = styled.img`
  animation-duration: 1s;
`;

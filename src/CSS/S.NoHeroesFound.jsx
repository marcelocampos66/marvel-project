import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 80%;

  @media(min-width: 1024px) {
    max-width: 500px;    
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 90vw;
`;

export const Img = styled.img`
  height: 40vh;  
  max-height: 600px;
  width: auto;
  margin-bottom: 20px;
`;

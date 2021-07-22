import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  background-color: black;
  opacity: 0.5;
  width: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-top: 50px;
  padding: 0 0 0 5%;
  height: 100vh;
`;

export const LINK = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2em;
  margin: 1%;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid blue;
    border-radius: 5px;
  }
`;

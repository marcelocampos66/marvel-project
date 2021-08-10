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

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  width: 90%;
`;

export const Input = styled.input`
  min-width: 300px;
  width: 45%;
  background-color: white;
  border-radius: 10px;
  height: 40px;
  margin: 5px;
  padding-left: 15px;
  font-size: 1.1em;
`;

export const Button = styled.button`
  min-width: 150px;
  height: 40px;
  width: 20%;
  background-color: red;
  border-radius: 10px;
  margin: 20px;
  color: white;
  font-size: 1.2em;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: gray;

  &:hover {
    text-decoration: underline;
  }
`;

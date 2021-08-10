import styled from 'styled-components';

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
  height: 90vh;
  width: 90vw;
`;

export const Img = styled.img`
  width: 70vw;  
  max-width: 600px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  width: 90%;
`;

export const Button = styled.button`
  min-width: 150px;
  height: 40px;
  width: 20%;
  border-radius: 10px;
  margin: 20px;
  color: white;
  font-size: 1.2em;
`;

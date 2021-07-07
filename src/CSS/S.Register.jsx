import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100vh;
  width: 100vw;
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

export const Label = styled.label`
  color: gray;
  font-size: 1.5em;
  padding-left: 15px;
`;

export const Input = styled.input`
  min-width: ${(props) => props.larguraMin};
  width: ${(props) => props.largura};
  background-color: white;
  border-radius: 10px;
  height: 45px;
  margin: 5px;
  padding-left: 15px;
  font-size: 1.1em;
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

export const DivInput = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.align};
  width: 50%;
  min-width: 300px;

  .checkbox {
    height: 25px;
    font-size: 1.2em;
  }
`;

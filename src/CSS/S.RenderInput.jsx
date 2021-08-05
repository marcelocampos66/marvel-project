import styled from 'styled-components';

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

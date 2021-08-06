import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 45vw;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.select`
  display: flex;
  min-width: 150px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  color: black;
  font-size: 1.2em;
  padding: 0 2vw 0 2vw;
`;

export const Option = styled.option`
  height: 10vh;
  font-size: 1em;
`;

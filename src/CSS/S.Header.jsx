import styled from 'styled-components';

export const Img = styled.img`
  height: 45px;
`;

export const DivButton = styled.div`
  height: 45px;
  margin: 0 5%;
  border: 1px solid black;

  &:hover {
    border: 1px solid gray;
    cursor: pointer;
  }
`;

export const Header = styled.header`
  background-color: black;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

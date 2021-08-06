import styled from 'styled-components';
import Plus from '../images/plus.png';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 15vh;
  background-color: black;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
  background-color: white;
  width: 85vw;
  border-radius: 15px;
`;

export const DivImg = styled.div`
  display: flex;
  border: 0px solid;
  border-radius: 0 5px 5px 0;
  height: 5vh;
  width: 15vw;
  padding: 2px 0;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  height: 7vh;
`;

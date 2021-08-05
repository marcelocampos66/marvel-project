import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 70vw;
  background-color: gray;
  padding: 3vh 5vw;
  border-radius: 10px;
`;

export const DivError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Img = styled.img`
  height: 10%;  
  width: auto;
  max-width: 150px;
`;

export const DivMessages = styled.div`
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const P = styled.p`
  text-align: center;
`;

export const Button = styled.button`
  width: 45%;
  height: 5vh;
  border-raius: 10px;
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.main`
  display: flex;
  justify-content: center;
`;

export const DivCard = styled.div`
  width: 90%;
  height: 20vh;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin: 0px, 10%, 5%, 10%;
`;
export const Hr = styled.hr`
  width: 90%;
`;

export const Img = styled.img`
width: 100px;
height: 90%;
margin: 2%;

@media(max-width: 400px) {
  margin: 0;
  height: 90%;
  width: 100px;
  margin: 0 2%
}
`;

export const P = styled.p`
  color: black;
  font-size: 12px;
`;

export const SLink = styled(Link)`
  text-decoration: none;
`;

export const DivPai = styled.div`
  width: 90%;
  height: 20vh;
  max-width: 33%;
  justify-self: start;

  @media(max-width: 400px) {
    max-width: 100%;
    width: 100%;
    height: 22vh;
  }
`;

export const DivFlexStart = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media(max-width: 400px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import back from '../images/back.png';
import next from '../images/next.png';
import backBlack from '../images/backBlack.png';
import nextBlack from '../images/nextBlack.png';

const pulseEffect = keyframes`${pulse}`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2% 0%;
`;

export const ImgBack = styled.button`
  border-radius: 100%;
  margin: 0% 3%;
  height: 3em;
  width: 3em;
  max-width: 100px;
  max-height: 100px;
  background-image: url(${back});
  background-size: cover;
  padding: 2px;
  border: solid 0px black;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-image: url(${(props) => (props.disabled ? back : backBlack)});
    animation: 1s ${pulseEffect};
  }
  &:active {
    animation: 1s ${pulseEffect};
  }
`;

// backBlack

export const ImgNext = styled.button`
  border-radius: 100%;
  margin: 0% 3%;
  height: 3em;
  width: 3em;
  max-width: 100px;
  max-height: 100px;
  background-image: url(${next});
  background-size: cover;
  padding: 2px;
  border: solid 0px black;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-image: url(${(props) => (props.disabled ? next : nextBlack)});
    animation: 0.5s ${pulseEffect};
  }
  &:active {
    animation: 0.5s ${pulseEffect};
  }
`;

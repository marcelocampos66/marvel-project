import styled from 'styled-components';

export const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 25vh;
  align-items: center;
  width: 100vw;
  margin-top: 10vh;
`;

export const H3 = styled.h3`
  margin: 1vh 0;
`;

export const ButtonFilterContainer = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
  width: 100vw;
`;

export const ButtonFilter = styled.button`
  min-width: 150px;
  height: 40px;
  width: 40%;
  background-color: black;
  border-radius: 10px;
  color: white;
  font-size: 1.2em;
  margin: 0 3vw 0 3vw;
  // margin: 0 4%;
`;

export const SelectFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  // align-items: center;
  justify-content: space-evenly;
  // padding: 0 5%;
  margin-bottom: 2vh;
  width: 100vw;
`;

export const ClearFiltersButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50vw;
`;

export const ButtonClearFilter = styled.button`
  min-width: 150px;
  height: 40px;
  width: 20%;
  background-color: red;
  border-radius: 10px;
  color: white;
  font-size: 1.2em;
  margin: 0 3vw 0 3vw;
`;

export const Hr = styled.hr`
  width: 90%;
`;

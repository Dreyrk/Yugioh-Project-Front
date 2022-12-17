import React from "react";
import styled from "styled-components";
import colors from "../Styles/colors";

const { gold, gold2 } = colors;

const BoxContainer = styled.div`
  height: 400px;
  width: 250px;
  margin: 5px;
  border: 1px solid;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;

const DeckTitle = styled.h2`
  color: ${gold};
`;

const DeckImgContainer = styled.div`
  height: 60%;
  width: 80%;
  background-color: ${gold2};
`;

const DeckDesc = styled.p`
  height: 20%;
  width: 80%;
  background-color: ${gold2};
`;

export default function DeckBox({ setIsOpen }) {
  return (
    <BoxContainer onClick={() => setIsOpen(true)}>
      <DeckTitle>Deck Name</DeckTitle>
      <DeckImgContainer></DeckImgContainer>
      <DeckDesc>Desc Test</DeckDesc>
    </BoxContainer>
  );
}

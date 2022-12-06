import React from "react";
import DeckBox from "../components/DeckBox";
import styled from "styled-components";

const DeckPage = styled.div`
  margin-top: 2%;
  height: 100%;
  max-width: 1600px;
  display: grid;
  grid-gap: 15px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 250px);
    place-items: center;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 250px);
    place-items: center;
  }
  @media (min-width: 1060px) {
    grid-template-columns: repeat(4, 250px);
    place-items: center;
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(6, 250px);
    place-items: center;
  }
`;

export default function Decks() {
  const test = [1, 2, 3, 4, 5];

  return (
    <DeckPage>
      {test.map(() => (
        <DeckBox />
      ))}
    </DeckPage>
  );
}

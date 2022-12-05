import React from "react";
import Cards from "./Cards";
import styled from "styled-components";

const DisplayCardsContainer = styled.div`
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

export default function DisplayAll({ cards }) {
  return (
    <div>
      <DisplayCardsContainer>
        {cards.map((val) => {
          return <Cards cardsData={val} key={val.ID} />;
        })}
      </DisplayCardsContainer>
    </div>
  );
}

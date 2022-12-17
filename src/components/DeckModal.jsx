import React from "react";
import styled from "styled-components";
import colors from "../Styles/colors";

const { gold } = colors;

const ModalContainer = styled.div`
  height: 600px;
  width: 400px;
  background-color: black;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ButtonContainer = styled.div`
  height: 40px;
  width: 40px;
  align-self: flex-end;
  margin-right: 5px;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  justify-self: flex-start;
`;

const DeckTitle = styled.h1`
  color: ${gold};
`;
const DeckRarity = styled.h3`
  color: ${gold};
`;
const DeckDescription = styled.p`
  color: ${gold};
`;

export default function DeckModal({ setIsOpen }) {
  return (
    <ModalContainer>
      <ButtonContainer>
        <svg
          onClick={() => setIsOpen(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill={gold}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </ButtonContainer>
      <TitleContainer>
        <DeckTitle>title</DeckTitle>
      </TitleContainer>
      <div>
        <DeckRarity>average rarity</DeckRarity>
      </div>
      <div>Best Cards of the deck</div>
      <div>
        <DeckDescription>Description</DeckDescription>
      </div>
      <div>
        <button type="button">More Infos</button>
      </div>
    </ModalContainer>
  );
}

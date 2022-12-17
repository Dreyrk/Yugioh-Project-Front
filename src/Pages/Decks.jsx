import React, { useState } from "react";
import DeckBox from "../Components/DeckBox";
import styled from "styled-components";
import DeckModal from "../Components/DeckModal";

const DeckPage = styled.div`
  margin-top: 2%;
  height: 100vh;
  max-width: 1600px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, 250px);
`;

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export default function Decks() {
  const test = [1, 2, 3, 4, 5];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DeckPage>
      {test.map((nb, i) => (
        <DeckBox setIsOpen={setIsOpen} key={i} />
      ))}
      <ModalContainer>
        {isOpen && <DeckModal setIsOpen={setIsOpen} isOpen={isOpen} />}
      </ModalContainer>
    </DeckPage>
  );
}

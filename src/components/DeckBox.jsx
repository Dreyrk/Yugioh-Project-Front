import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  height: 400px;
  width: 250px;
  margin: 5px;
  border: 1px solid;
  background-color: black;
`;

export default function DeckBox() {
  return (
    <BoxContainer>
      <div></div>
    </BoxContainer>
  );
}

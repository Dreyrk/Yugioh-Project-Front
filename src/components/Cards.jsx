import React, { useState } from "react";
import styled from "styled-components";
import colors from "../Styles/colors";

const { beige } = colors;

const CardContainer = styled.div`
  height: 400px;
  width: 200px;
  position: relative;
  background-color: ${beige};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  padding: 4px;
  box-shadow: 10px 5px 5px black;
`;

const CardBack = styled.div`
  height: 400px;
  width: 210px;
  position: relative;
`;

const BackImg = styled.img`
  height: 400px;
  width: 210px;
`;

const CardTitle = styled.h5`
  text-align: center;
  border: 1px solid;
  height: 20px;
  width: 185px;
  margin-top: 0;
  margin-bottom: 5px;
`;

const ImgContainer = styled.div`
  height: 280px;
  width: 185px;
  border: 1px solid;
`;

const DescContainer = styled.div`
  height: 100px;
  width: 185px;
  margin: 5px;
  border: 1px solid;
  overflow-y: scroll;
`;

const Desc = styled.p`
  font-size: medium;
`;

const TitleRarityContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const RarityContainer = styled.div`
  text-align: center;
  border: 1px solid;
  height: 20px;
  width: 185px;
`;

function Cards({ cardsData }) {
  const { Name, Rarity, Description } = cardsData;
  const filteredName = Name.replace(/\s*\(.*?\)\s*/g, "");
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {!isClicked ? (
        <CardBack onMouseEnter={() => setIsClicked(true)}>
          <BackImg src="./Images/back-card-yugioh.png" alt="card-back" />
        </CardBack>
      ) : (
        <CardContainer onMouseLeave={() => setIsClicked(false)}>
          <TitleRarityContainer>
            <CardTitle>{filteredName}</CardTitle>
            <RarityContainer>{Rarity}</RarityContainer>
          </TitleRarityContainer>
          <ImgContainer></ImgContainer>
          <DescContainer>
            <Desc>{Description}</Desc>
          </DescContainer>
        </CardContainer>
      )}
    </>
  );
}

export default Cards;

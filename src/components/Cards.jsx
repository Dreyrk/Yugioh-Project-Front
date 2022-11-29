import React, { useState } from "react";
import styled from "styled-components";
import colors from "../Styles/colors";

const { beige } = colors;

const CardContainer = styled.div`
  height: 400px;
  width: 200px;
  background-color: ${beige};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  margin: 10px;
  padding: 4px;
  box-shadow: 10px 5px 5px black;
`;

const CardBack = styled.div`
  height: 400px;
  width: 210px;
  margin: 0;
`;

const BackImg = styled.img`
  height: 400px;
  width: 210px;
  margin: 0;
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
  overflow: scroll;
  text-overflow: ellipsis;
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

  const handleClicked = () => setIsClicked(!isClicked);

  return (
    <>
      {isClicked ? (
        <CardBack onClick={handleClicked}>
          <BackImg src="./Images/back-card-yugioh.png" alt="card-back" />
        </CardBack>
      ) : (
        <CardContainer>
          <TitleRarityContainer>
            <CardTitle>{filteredName}</CardTitle>
            <RarityContainer>{Rarity}</RarityContainer>
          </TitleRarityContainer>
          <ImgContainer onClick={handleClicked}></ImgContainer>
          <DescContainer>{Description}</DescContainer>
        </CardContainer>
      )}
    </>
  );
}

export default Cards;

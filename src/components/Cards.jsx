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
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  height: 35px;
  width: 185px;
  margin-top: 0;
  margin-bottom: 5px;
  font-size: large;
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
  font-size: large;
`;

const TitleRarityContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const RarityContainer = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2px;
  font-size: large;
  border: 1px solid;
  height: 20px;
  width: 185px;
`;

const RarityImg = styled.img`
  height: 20px;
  width: 20px;
`;

function Cards({ cardsData, openAll }) {
  const { Name, Rarity, Description } = cardsData;
  const filteredName = Name.replace(/\s*\(.*?\)\s*/g, "");
  const [isClicked, setIsClicked] = useState(false);
  const source = "../../public/Images/RarityStar.png";

  const rarityNumber = (filteredRarity) => {
    if (filteredRarity === "Commune") {
      return 4;
    }
    if (filteredRarity === "Rare") {
      return 5;
    }
    if (filteredRarity === "Super Rare") {
      return 6;
    }
    if (filteredRarity === "Ultra Rare") {
      return 8;
    }
    if (filteredRarity === "Ultimate Rare") {
      return 10;
    }
  };
  const rarityDefine = (rarityNumber) => {
    for (let i = 0; i < rarityNumber; i++) {
      images.push({ src: source, alt: "img" });
    }
    return images;
  };

  const images = rarityDefine(rarityNumber(Rarity.substring(8)));

  console.log(images);

  return (
    <>
      {!isClicked && !openAll ? (
        <CardBack onMouseEnter={() => setIsClicked(true)}>
          <BackImg src="./Images/back-card-yugioh.png" alt="card-back" />
        </CardBack>
      ) : (
        <CardContainer onMouseLeave={() => setIsClicked(false)}>
          <TitleRarityContainer>
            <CardTitle>{filteredName}</CardTitle>
            <RarityContainer>
              <RarityImg src={images.src} />
            </RarityContainer>
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

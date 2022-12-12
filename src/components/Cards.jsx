import React, { useState } from "react";
import styled from "styled-components";
import colors from "../Styles/colors";
import backCardYugioh from "../Images/backCardYugioh.png";
import { motion } from "framer-motion";

const { beige } = colors;

const CardContainer = styled.div`
  height: 400px;
  width: 200px;
  background-color: ${beige};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  box-shadow: 10px 5px 5px black;
`;

const CardBack = styled.div`
  height: 400px;
  width: 210px;
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

const StarContainer = styled(motion.div)`
  height: 30px;
  width: 190px;
  display: flex;
`;

function Cards({ cardsData, openAll }) {
  const { Name, Rarity, Description } = cardsData;
  const filteredName = Name.replace(/\s*\(.*?\)\s*/g, "");
  const filteredRarity = Rarity.substring(9);
  const [isClicked, setIsClicked] = useState(false);

  //Define Rarity of this card as number of star
  const rarityNumber = (rarity) => {
    switch (rarity) {
      case "Commune":
        return 4;
      case "Rare":
        return 5;
      case "Super Rare":
        return 6;
      case "Ultra Rare":
        return 8;
      case "Ultimate Rare":
        return 10;

      default:
        return 1;
    }
  };

  const rarityAsNumber = rarityNumber(filteredRarity);

  const rarityDefine = (rarityNumber) => {
    const images = [];
    for (let i = 0; i < rarityNumber; i++) {
      images.push(1);
    }
    return images;
  };

  const images = rarityDefine(rarityAsNumber);

  return (
    <>
      {!isClicked && !openAll ? (
        <CardBack onMouseEnter={() => setIsClicked(true)}>
          <BackImg src={backCardYugioh} alt="card-back" />
        </CardBack>
      ) : (
        <CardContainer onMouseLeave={() => setIsClicked(false)}>
          <TitleRarityContainer>
            <CardTitle>{filteredName}</CardTitle>
            <StarContainer
              animate={{
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.5,
                },
              }}>
              {images.map((star, index) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              ))}
            </StarContainer>
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

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  height: 400px;
  width: 200px;
  background-color: #f9e4b7;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
`;

const CardBack = styled.div`
  height: 400px;
  width: 200px;
`;

const CardTitle = styled.h5`
  text-align: center;
  border: 1px solid;
  height: 30px;
  width: 185px;
`;

const ImgContainer = styled.div`
  height: 280px;
  width: 185px;
  border: 1px solid;
`;

const DescContainer = styled.div`
  height: 90px;
  width: 185px;
  margin: 5px;
  border: 1px solid;
`;

const TitleRarityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RarityContainer = styled.div`
  text-align: center;
  border: 1px solid;
  height: 30px;
  width: 185px;
`;

const CardDescType = styled.h5`
  text-align: center;
  border-top: none;
  border-bottom: none;
  border-left: 2px solid;
  width: 30%;
  height: 20px;
`;

function Cards({ cardsData }) {
  return (
    <>
      <CardContainer>
        <TitleRarityContainer>
          <CardTitle>{cardsData.Name}</CardTitle>
          <RarityContainer></RarityContainer>
        </TitleRarityContainer>
        <ImgContainer src="public\src\back-card-yugioh.png"></ImgContainer>
        <DescContainer></DescContainer>
      </CardContainer>
      <CardBack></CardBack>
    </>
  );
}

export default Cards;
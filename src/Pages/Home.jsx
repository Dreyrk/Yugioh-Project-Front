import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import styled from "styled-components";
import colors from "../Styles/colors";

const { gold, gold2 } = colors;

const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin-top: 10px;
  overflow: hidden;
`;

const DisplayCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 250px 250px 250px;
  place-items: center;
`;

const SubTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SubTitle = styled.h2`
  color: ${gold};
  font-size: x-large;
`;

function Home() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/cards",
      baseURL: "http://localhost:5000",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.data)
      .then((data) => {
        setCardsData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <HomeContainer>
      <SubTitleContainer>
        <SubTitle>Trending :</SubTitle>
      </SubTitleContainer>
      <DisplayCardsContainer>
        {cardsData.map((val) => {
          return <Cards cardsData={val} key={val.ID} />;
        })}
      </DisplayCardsContainer>
    </HomeContainer>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import styled from "styled-components";
import colors from "../Styles/colors";

const { gold, gold2 } = colors;

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const DisplayCardsContainer = styled.div`
  width: 100%;
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

const SubTitleContainer = styled.div`
  width: 15%;
  height: 3rem;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  padding: 5px;
`;

const SubTitle = styled.h2`
  color: ${gold};
  font-size: x-large;
  border: 1px solid;
  padding: 10px;
  border-radius: 1rem;
  border-color: darkgray;
  :hover {
    background-color: ${gold2};
    color: black;
  }
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
  }, []);

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

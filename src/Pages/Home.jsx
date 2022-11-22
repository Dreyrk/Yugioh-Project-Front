import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import styled from "styled-components";

const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Home() {
  const [cardsData, setCardsData] = useState([]);

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
      console.log(cardsData);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <HomeContainer>
      {cardsData.map((val) => {
        return <Cards cardsData={val} key={val.ID} />;
      })}
    </HomeContainer>
  );
}

export default Home;

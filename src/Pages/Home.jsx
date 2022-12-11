import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import colors from "../Styles/colors";
import DisplayAll from "../components/DisplayAll";
import PageNav from "../components/PageNav";

const { gold, gold2 } = colors;

const HomeContainer = styled.div`
  height: 100%;
  max-width: 1600px;
  margin-top: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
  font-size: xx-large;
  text-align: center;
  border: 1px solid;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 1rem;
  border-color: darkgray;
  :hover {
    background-color: ${gold2};
    color: black;
  }
`;

function Home() {
  const [cardsData, setCardsData] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(0);
  useEffect(() => {
    axios({
      method: "get",
      url: `/api/cards?page=${page}&limit=${limit !== 0 && limit}`,
      baseURL: "http://localhost:5000",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.data)
      .then((data) => {
        setCardsData(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  return (
    <HomeContainer>
      <SubTitleContainer>
        <SubTitle>Trending :</SubTitle>
      </SubTitleContainer>
      <DisplayAll cardsData={cardsData} page={page} />
      <PageNav page={page} setPage={setPage} />
    </HomeContainer>
  );
}

export default Home;

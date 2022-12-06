import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import colors from "../Styles/colors";
import DisplayAll from "../components/DisplayAll";

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

const PageNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const PageNavButton = styled.button`
  background-color: ${gold};
  border: 1px solid;
  padding: 6px;
  border-radius: 2rem;
`;

function Home() {
  const [cardsData, setCardsData] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    axios({
      method: "get",
      url: `/api/cards?page=${page}`,
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

  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <HomeContainer>
      <SubTitleContainer>
        <SubTitle>Trending :</SubTitle>
      </SubTitleContainer>
      <DisplayAll cards={cardsData} page={page} />
      <PageNav>
        {page > 0 ? (
          <PageNavButton onClick={previousPage}>Previous</PageNavButton>
        ) : null}
        <h5>{page === 0 ? null : page}</h5>
        {page < 228 ? (
          <PageNavButton onClick={nextPage}>Next</PageNavButton>
        ) : null}
      </PageNav>
    </HomeContainer>
  );
}

export default Home;

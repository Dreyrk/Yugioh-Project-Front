import styled from "styled-components";
import colors from "./Styles/colors";
import "./Styles/index.css";
import "./Styles/Fonts/Yu-Gi-OhMatrixRegular.ttf";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Decks from "./Pages/Decks";
import Rules from "./Pages/Rules";
import React, { useState, useEffect } from "react";
import { CardsContext } from "./Context/CardsContext";

const { grey } = colors;

const Page = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${grey};
  font-family: "Yu-Gi-Oh";
`;

const HeaderContainer = styled.div`
  height: 30%;
`;

function App() {
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
  }, [page, limit]);

  const cards = {
    cardsData,
    setCardsData,
  };

  return (
    <>
      <CardsContext.Provider value={cards}>
        <Page>
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  limit={limit}
                  setLimit={setLimit}
                  page={page}
                  setPage={setPage}
                />
              }
            />
            <Route path="/decks" element={<Decks />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </Page>
      </CardsContext.Provider>
    </>
  );
}

export default App;

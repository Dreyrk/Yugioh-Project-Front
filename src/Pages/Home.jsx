import React from "react";
import styled from "styled-components";
import colors from "../Styles/colors";
import DisplayAll from "../Components/DisplayAll";
import PageNav from "../Components/PageNav";

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

function Home({ page, setPage }) {
  const itemsOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <HomeContainer>
      <SubTitleContainer>
        <SubTitle>Trending :</SubTitle>
        <select name="limit">
          {itemsOptions.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </SubTitleContainer>
      <DisplayAll page={page} />
      <PageNav page={page} setPage={setPage} />
    </HomeContainer>
  );
}

export default Home;

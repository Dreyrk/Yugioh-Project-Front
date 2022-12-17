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
  width: 95%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 20px;
`;

const SubTitle = styled.h2`
  height: 2.5rem;
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

const SelectItems = styled.select`
  height: 20px;
  width: 6rem;
`;

function Home({ page, setPage }) {
  const itemsOptions = ["Monster", "Magic", "Trap"];

  return (
    <HomeContainer>
      <SubTitleContainer>
        <SubTitle>All Cards :</SubTitle>
        <SelectItems>
          {itemsOptions.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </SelectItems>
      </SubTitleContainer>
      <DisplayAll page={page} />
      <PageNav page={page} setPage={setPage} />
    </HomeContainer>
  );
}

export default Home;

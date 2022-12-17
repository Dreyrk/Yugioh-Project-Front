import React, { useState } from "react";
import Cards from "./Cards";
import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "../Styles/colors";
import "../Styles/Fonts/Yu-Gi-OhMatrixRegular.ttf";
import "../Styles/index.css";
import { useContext } from "react";
import { CardsContext } from "../Context/CardsContext";

const { grey } = colors;

const DisplayCardsContainer = styled(motion.div)`
  margin-left: 20px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, 250px);
`;

const OpenAllButton = styled.button`
  border: 1px solid ${grey};
  background-color: #e1e733;
  border-radius: 2rem;
  place-self: center;
  margin-top: 2rem;
  grid-column: span 6;
  font-size: larger;
`;

const item = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 1.2,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};

export default function DisplayAll() {
  const [openAll, setOpenAll] = useState(false);

  const { cardsData } = useContext(CardsContext);

  return (
    <DisplayCardsContainer
      className="Cards"
      variants={container}
      initial="hidden"
      animate="show">
      {cardsData.map((val) => {
        return (
          <motion.div key={val.ID} variants={item}>
            <Cards openAll={openAll} cardsData={val} />
          </motion.div>
        );
      })}
      <OpenAllButton onClick={() => setOpenAll(!openAll)}>
        {openAll ? "CLOSE ALL" : "OPEN ALL"}
      </OpenAllButton>
    </DisplayCardsContainer>
  );
}

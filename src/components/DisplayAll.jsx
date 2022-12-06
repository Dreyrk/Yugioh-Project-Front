import React, { useState } from "react";
import Cards from "./Cards";
import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "../Styles/colors";
import "../Styles/Fonts/Yu-Gi-OhMatrixRegular.ttf";
import "../Styles/index.css";

const { grey } = colors;

const DisplayCardsContainer = styled(motion.div)`
  max-width: 1600px;
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

export default function DisplayAll({ cards }) {
  const [openAll, setOpenAll] = useState(false);
  return (
    <DisplayCardsContainer
      className="Cards"
      variants={container}
      initial="hidden"
      animate="show">
      {cards.map((val) => {
        return (
          <motion.div variants={item}>
            <Cards openAll={openAll} cardsData={val} key={val.ID} />
          </motion.div>
        );
      })}
      <OpenAllButton onClick={() => setOpenAll(!openAll)}>
        OPEN ALL
      </OpenAllButton>
    </DisplayCardsContainer>
  );
}

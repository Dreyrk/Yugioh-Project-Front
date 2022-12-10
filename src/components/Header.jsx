import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../Styles/colors";
import BurgerMenu from "./BurgerMenu";
import milleniumPuzzle from "../Images/milleniumPuzzle.png";

const { gold } = colors;

const Logo = styled.img`
  height: 78px;
  width: 78px;
  padding-left: 10px;
  padding-top: 10px;
`;

const Title = styled.h1`
  width: 100%;
  height: 100px;
  color: ${gold};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
`;

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <Logo src={milleniumPuzzle} />
      </NavLink>
      <Title>Yugioh Project</Title>
      <BurgerMenu />
    </HeaderContainer>
  );
}

export default Header;

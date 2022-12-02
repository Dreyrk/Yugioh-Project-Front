import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../Styles/colors";
import BurgerMenu from "./BurgerMenu";

const { gold } = colors;

const Logo = styled.img`
  height: 78px;
  width: 78px;
  padding-left: 10px;
`;

const Title = styled.h1`
  width: 50rem;
  height: 100%;
  color: ${gold};
  text-align: center;
`;

const HeaderContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const MenuContainer = styled.div`
  height: 78px;
  width: 20%;
`;

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <Logo src="./Images/milleniumPuzzle.png" />
      </NavLink>
      <Title>Yugioh Project</Title>
      <MenuContainer>
        <BurgerMenu />
      </MenuContainer>
    </HeaderContainer>
  );
}

export default Header;

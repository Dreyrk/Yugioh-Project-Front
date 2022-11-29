import React from "react";
import styled from "styled-components";
import colors from "../Styles/colors";
import BurgerMenu from "./BurgerMenu";

const { gold } = colors;

const Title = styled.h1`
  width: 100%;
  height: 100%;
  color: ${gold};
  text-align: center;
  padding-left: 50px;
`;

const HeaderContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const MenuContainer = styled.div`
  height: 100%;
  width: 70px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>Yugioh Project</Title>
      <MenuContainer>
        <BurgerMenu />
      </MenuContainer>
    </HeaderContainer>
  );
}

export default Header;

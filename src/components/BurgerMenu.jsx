import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../Styles/colors";
import Clock from "./Clock";

const { gold } = colors;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100px;
  padding-right: 10px;
  position: sticky;
`;

const ButtonContainer = styled.div`
  height: 50px;
  width: 50px;
  align-self: flex-end;
  padding: 5px;
`;

const ListContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-right: 5%;
  height: 100%;
  width: 100%;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  font-size: x-large;

  color: ${gold};
  height: 40px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 1rem;
  padding-right: 5px;
  padding-left: 5px;
  cursor: pointer;
`;

const OpenMenuContainer = styled.div`
  width: 700px;
  height: 1015px;
  @media (max-width: 600px) {
    width: 600px;
  }
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
`;

function BurgerMenu({ isOpen, setIsOpen }) {
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen ? (
        <OpenMenuContainer>
          <ButtonContainer>
            <svg
              onClick={handleOpen}
              xmlns="http://www.w3.org/2000/svg"
              fill={gold}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </ButtonContainer>
          <ListContainer>
            <StyledLink onClick={handleOpen} to="/">
              Home
            </StyledLink>
            <StyledLink onClick={handleOpen} to="/decks">
              Decks
            </StyledLink>
            <StyledLink onClick={handleOpen} to="/rules">
              Rules
            </StyledLink>
          </ListContainer>
          <Clock />
        </OpenMenuContainer>
      ) : (
        <MenuContainer>
          <svg
            onClick={handleOpen}
            xmlns="http://www.w3.org/2000/svg"
            fill={gold}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={gold}
            className="w-70 h-70">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </MenuContainer>
      )}
    </>
  );
}
export default BurgerMenu;

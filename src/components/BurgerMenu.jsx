import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../Styles/colors";

const { gold } = colors;

const MenuContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  height: 70px;
  width: 70px;
`;

const ListContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-right: 5%;
  background-color: black;
  height: 50rem;
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

  border: 1px solid;
  border-radius: 1rem;
  padding: 2%;
`;

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen ? (
        <>
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
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/decks">Decks</StyledLink>
            <StyledLink to="/rules">Rules</StyledLink>
          </ListContainer>
        </>
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

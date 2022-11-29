import { useState } from "react";
import styled from "styled-components";
import colors from "../Styles/colors";

const { gold } = colors;

const MenuContainer = styled.div`
  height: 100%;
`;

const Logo = styled.img`
  background-color: ${gold};
  height: 100%;
  width: 70px;
`;

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuContainer>
        <Logo src="./Images/menu.png" />
      </MenuContainer>
    </>
  );
}
export default BurgerMenu;

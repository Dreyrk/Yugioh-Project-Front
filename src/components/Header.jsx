import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/src/logo";

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <img
        src={logo}
        alt="Yugioh logo"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
}

export default Header;

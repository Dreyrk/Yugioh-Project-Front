import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../Styles/colors";

const { gold } = colors;

const ClockContainer = styled.div`
  background-color: ${gold};
  width: 98%;
  height: 10%;
  padding-right: 10px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export default function Clock() {
  const date = new Date();
  const [updateClock, setUpdateClock] = useState("");
  const clockIncrement = () => {
    return setUpdateClock(date.toLocaleString("fr-FR"));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      clockIncrement();
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <ClockContainer>
        <h1>{updateClock}</h1>
      </ClockContainer>
    </>
  );
}

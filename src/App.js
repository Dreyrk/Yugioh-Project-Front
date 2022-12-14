import Home from "./Pages/Home";
import styled from "styled-components";
import Header from "./components/Header";
import colors from "./Styles/colors";
import { Route, Routes } from "react-router-dom";
import Decks from "./Pages/Decks";
import Rules from "./Pages/Rules";

const { grey } = colors;

const Page = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${grey};
`;

function App() {
  return (
    <>
      <Page>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decks" element={<Decks />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Page>
    </>
  );
}

export default App;

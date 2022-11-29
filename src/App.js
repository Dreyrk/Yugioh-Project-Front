import Home from "./Pages/Home";
import styled from "styled-components";
import Header from "./components/Header";
import colors from "./Styles/colors";

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
    <Page>
      <Header />
      <Home />
    </Page>
  );
}

export default App;

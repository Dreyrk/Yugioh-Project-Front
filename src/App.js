import Home from "./Pages/Home";
import styled from "styled-components";

const Page = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd6hhft-d09c0a51-dc22-43e0-b4c4-9d426fb7c14a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGQ2aGhmdC1kMDljMGE1MS1kYzIyLTQzZTAtYjRjNC05ZDQyNmZiN2MxNGEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rFUrNSDar1CwY76UDGRqCp1oBOP2Mi5j3lUXggjHz2c");
  background-repeat: no-repeat;
`;

function App() {
  return (
    <Page>
      <Home />
    </Page>
  );
}

export default App;

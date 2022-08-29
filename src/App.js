import Landing from "./pages/Landing";
import "./App.css";
import styled from "styled-components";

const Button = styled.button`
  background: red;
  color: white;
  font-size: 2rem;
`;

function App() {
  return (
    <div>
      <Button>Click Me</Button>
      <Landing />
    </div>
  );
}

export default App;

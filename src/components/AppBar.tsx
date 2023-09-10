import { Link } from "react-router-dom";
import styled from "styled-components";

export function AppBar() {
  return (
    <Bar>
      <div>Mimir</div>
      <Link to="/">Home</Link>
      <Link to="/cards">Manage Cards</Link>
    </Bar>
  );
}

const Bar = styled.div`
  display: flex;
  gap: 20px;
  background: lightblue;
  padding: 10px;
`;

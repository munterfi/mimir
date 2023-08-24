import { useState } from "react";
import "./App.css";
import Content from "../widgets/Content";
import Navbar from "../widgets/Navbar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;

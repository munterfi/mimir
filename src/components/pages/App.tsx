import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./Content";

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

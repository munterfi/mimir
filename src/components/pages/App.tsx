import Content from "../widgets/Content";
import Navbar from "../widgets/Navbar";

function App() {
  return (
    <div>
      <Navbar />
        // TODO: Remove this button later
        <button onClick={() => console.log("hello app")}>Test Button</button>
      <Content />
    </div>
  );
}

export default App;

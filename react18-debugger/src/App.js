// import logo from "./logo.svg";
// import './App.css';
import { useState } from "react";
import Sub from "./Sub";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="app-container">
      <Sub></Sub>
      <p>count:{count}</p>
    </div>
  );
}

export default App;

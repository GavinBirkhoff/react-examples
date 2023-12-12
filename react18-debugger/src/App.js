// import logo from "./logo.svg";
// import './App.css';
import { useState } from "react";
import Sub from "./Sub";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <Sub></Sub>
      {/* <header className="App-header">
        <span className="App-span">span </span>
        <p className="App-ppp">ppp</p>
      </header> */}
      <section>count:{count}</section>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;

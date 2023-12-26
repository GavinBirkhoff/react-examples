import { Component } from "react";
import SubC from "./SubC";

class App extends Component {
  constructor() {
    super();
    this.state = { count: 1 };
  }
  render() {
    return (
      <div className="app-container">
        <SubC />
        <p>app-count:{this.state.count}</p>
      </div>
    );
  }
}

export default App;

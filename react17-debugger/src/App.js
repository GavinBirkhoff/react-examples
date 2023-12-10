import React from "react";

class Button extends React.Component {
  render() {
    // debugger;
    return <button>btn</button>;
  }
}

class App extends React.Component {
  state = { num: 1 };
  render() {
    debugger;
    return (
      <div>
        {this.state.num}
        <h1>456</h1>
        <button
          onClick={() => {
            debugger;
            this.setState({ num: this.state.num + 1 });
          }}
        >
          num++
        </button>
        {this.state.num < 2 && <Button></Button>}
      </div>
    );
  }
}

export default App;

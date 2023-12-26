import { Component } from "react";

class SubC extends Component {
  constructor() {
    super();
    this.state = { count: 1 };
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  componentDidMount(){
    debugger
  }
  componentDidUpdate(){
    debugger
  }
  render() {
    debugger
    return (
      <section onClick={() => this.handleClick()}>sub-count:{this.state.count}</section>
    );
  }
}

export default SubC;

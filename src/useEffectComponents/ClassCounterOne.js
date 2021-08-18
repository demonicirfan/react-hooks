import React, { Component } from "react";

export class ClassCounterOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }
  //component will mount with a inital count value of 0
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  //comonent willm update with a new incremented count value when the button is clicked
  componentDidUpdate(prevProps, prevState) {
    console.log("updating doument title  -- componentDidUpdate() --");
    if (prevState.count !== this.state.count) {
      document.title = `${this.state.name}`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;

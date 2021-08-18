import React, { Component } from "react";

export class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: "",
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1,
      color: "#" + Math.random().toString(16).slice(2, 8),
    });
  };

  render() {
    return <div style={{ color: this.state.color }}>{this.state.count}</div>;
  }
}

export default IntervalClassCounter;

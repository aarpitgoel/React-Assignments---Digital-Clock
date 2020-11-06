import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div className="Clock">
        <div id="time">{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default App;

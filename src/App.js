import React, { Component } from "react";
import Button from "./components/Button";
import "./assets/css/style.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
   reset = () => {
    this.setState({
      count: this.state.count =0
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div>
          <div class="count">
            
            <h1>{count}</h1>
          </div>
          <div class="buttons">
          <center>   <Button class="btn_1" title={"DECREMENT"} action={this.decrementCount} /> <br/><br/><br/>
          <Button class="btn_2" title={"RESET"} action={this.reset } /><br/><br/><br/>
            <Button class="btn_2" title={"INCREMENT"} action={this.incrementCount} />
            
            </center>
      </div>
        </div>
      </div>
    );
  }
}

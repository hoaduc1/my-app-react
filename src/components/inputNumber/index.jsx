import React from "react";
import "./index.css"

class inputNumber0 extends React.Component {
  constructor(props) {
    super(props);
    // Specify the state
    this.state = { index: 1 };
    console.log(this.state.index)
  }
  render() {
    return (
      <div className="btn-form-1">
        <button className="btn-1"
          onClick={() => {
            this.setState({
              index: this.state.index + 1
            })
          }}
        > <h className="a-1" >+</h> </button>
        <h className="value-show-1"> &nbsp;{this.state.index}&nbsp; </h>
        <button className="btn-1"
          onClick={() => {
            this.setState({
              index: this.state.index -1
            })
          }}
        > <h className="a-1" >-</h> </button>
      </div>
    );
  }
}

class inputNumber1 extends React.Component {
  constructor(props) {
    super(props);
    // Specify the state
    this.state = { index: 1 };
  }
  render() {
    return (
      <div>
        <p>Số lượng: {this.state.index}</p>
        <button
          onClick={() => {
            this.setState({
              index: this.state.index + 1
            })
          }}
        > Tăng </button>
        
        <button
          onClick={() => {
            this.setState({
              index: this.state.index -1
            })
          }}
        > Giảm </button>
      </div>
    );
  }
}

var inputNumber = [inputNumber0, inputNumber1]

export default inputNumber;
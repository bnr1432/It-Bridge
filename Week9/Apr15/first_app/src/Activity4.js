import React, { Component } from "react";

export default class Visitor extends Component {

//   constructor() {
//     super();
//     this.state = {
//       text : "Save Visitor",
//     };
//   }


    // Using class property syntax to define state
    state = {
        text : "Save Visitor",
    };

  changeVisitor = () => {
    this.setState({
      text : "Visitor Created Successfully",
    });
  };

  render() {
    return (
      <>
        <button onClick={this.changeVisitor}>{this.state.text }</button>
      </>
    );
  }
}

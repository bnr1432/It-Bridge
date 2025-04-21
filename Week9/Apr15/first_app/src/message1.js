import { Component } from "react";

export default class Message1 extends Component {
    constructor() {
        super();
        this.state = {
            msg : "Welcome to React",
        };
    }

    changeMessage() {
        this.setState({
            msg : "Thank you for Clicking",
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => this.changeMessage()}>Click Me </button>
            </div>
        );
    }
}   
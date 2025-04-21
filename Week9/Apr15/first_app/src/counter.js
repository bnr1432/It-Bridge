import { Component } from "react";

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 100, 
        };
    }

    increment = () => {
        if (this.state.count < 110) {
            this.setState({ count: this.state.count + 1 });
        }
    };

    decrement = () => {
        if (this.state.count > 90) {
            this.setState({ count: this.state.count - 1 });
        }
    };

    render() {
        return (
            <>
                <h1>Count: {this.state.count}</h1>
                <button 
                    onClick={this.increment} 
                    disabled={this.state.count >= 110}
                >
                    Increment
                </button>


                
                <button 
                    onClick={this.decrement} 
                    disabled={this.state.count <= 90}
                >
                    Decrement
                </button>
            </>
        );
    }
}

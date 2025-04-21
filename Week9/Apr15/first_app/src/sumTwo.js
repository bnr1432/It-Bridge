import { Component } from "react";

export default class SumTwo extends Component {
    constructor() {
        super();
        this.state = {
            num1: 0,
            num2: 0,
            sum: 0,
        };
    }

    calculateSum = () => {
        const { num1, num2 } = this.state;
        const sum = parseInt(num1) + parseInt(num2);
        this.setState({ sum });
    };

    render() {
        return (
            <div>
                <h2>Sum Calculator</h2>

                Number 1: <input type="number" onChange={(e) => this.setState({ num1: e.target.value })} /> <br />

                Number 2: <input type="number" onChange={(e) => this.setState({ num2: e.target.value })} /> <br />

                <button onClick={this.calculateSum}>Calculate Sum</button>
                <h3>The sum is: {this.state.sum}</h3>
            </div>
        );
        
    }
}
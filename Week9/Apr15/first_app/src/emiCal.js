import { Component } from "react";

export default class EMI extends Component {

    constructor() {
        super();
        this.state = {
            principal: 0,
            rate: 0,
            time: 0,
            emi: 0,
        };
    }

    calculateEMI = () => {
        const { principal, rate, time } = this.state;

        if (principal <= 0 || rate <= 0 || time <= 0) {
            alert("Please enter valid values for Principal, Rate, and Time.");
            return;
        }
        const monthlyRate = rate / (12 * 100); // Monthly interest rate
        
        const numberOfMonths = time * 12; // Total number of months

        // const numberOfYears = time; // Total number of years

        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
            (Math.pow(1 + monthlyRate, numberOfMonths) - 1);


        this.setState({ emi });
    };

    render(){
        return (
            <div>
                <h2>EMI Calculator</h2>
                Principal : <input type="number" placeholder="Principal Amount" onChange={(e) => this.setState({ principal: e.target.value })} /> <br/>
                Rate : <input type="number" placeholder="Rate of Interest" onChange={(e) => this.setState({ rate: e.target.value })} /> <br/>
                Time : <input type="number" placeholder="Time (in years)" onChange={(e) => this.setState({ time: e.target.value })} /> <br/>
                <button onClick={this.calculateEMI}>Calculate EMI</button>
                <h3>Your EMI is: {this.state.emi.toFixed(2)}</h3>
            </div>
        );
    }
}
import { Component } from "react";

export default class Clock extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date().toLocaleTimeString()
        };
        this.tick = this.tick.bind(this); // Bind the tick method to the class instance
    }

    // componentDidMount() {
    //     this.timerID = setInterval(() => this.tick(), 1000);
    // }

    componentDidMount() {
        // this.timerID = setInterval(this.tick, 1000);
        setInterval(this.tick, 1000); 
    }


    tick() {
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <div>
                <h2>Current Time: {this.state.date}</h2>
            </div>
        );
    }
}
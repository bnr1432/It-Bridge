import { Component } from "react";  

export default class BindExample extends Component {

    constructor() {
        super();
        this.state = {
            msg: "Hello This is Bind",
        };
        
    }


   


    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeMessage}>Click Me</button> {/* No arrow function needed */}
                  {/* //because changeMessage is an arrow function, it’s auto-bound. */}


                <button onClick={() => this.display()}>Click Me</button> {/* Arrow function */}

                <button onClick={() => this.convert()}>Convert</button> {/* Bind */}

                <button onClick={this.convert}>Convert</button> 
            </div>
        );
    }

    changeMessage = () => { // Using arrow function to bind 'this'
        this.setState({
            msg: "Thank you for Clicking",
        });
    }

    display() {
        this.setState({
            msg: "Thank you for Clicking",
        });
    }


    convert(){
        // this.setState({
        //     msg: "Convert",
        // });
    console.log("Hello convert");
    }
}
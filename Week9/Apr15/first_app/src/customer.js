import { Component } from "react"; 

export default class Customer extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to {this.props.fullname} City is {this.props.city}</h1>
            </div>
        );
    }
}
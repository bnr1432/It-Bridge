import { Component } from "react";

export default class FormHandlers extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            message: "",
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, password } = this.state;
        this.setState({ message: `Name: ${name}, Email: ${email}, Password: ${password}` });
    };

    render() {
        return (
            <div>
                <h2>Form Handlers</h2>
                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text" name="name" onChange={this.handleChange} /> <br />
                    Email: <input type="email" name="email" onChange={this.handleChange} /> <br />
                    Password: <input type="password" name="password" onChange={this.handleChange} /> <br />
                    <button type="submit">Submit</button>
                </form>
                <h3>{this.state.message}</h3>
            </div>
        );
    }
}
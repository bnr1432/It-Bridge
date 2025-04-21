import { Component } from "react";  

export default class ShowDate extends Component {
    state = {
        date: "", // initially empty or you can use new Date().toLocaleDateString()
    };

    updateDate = () => {
        this.setState({ date: new Date().toLocaleDateString() });
    };

    render() {
        return (
            <>
                <h1>Date: {this.state.date}</h1>
                <button onClick={this.updateDate}>Show Date</button>
            </>
        );
    }
}

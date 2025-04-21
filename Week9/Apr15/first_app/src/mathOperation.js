import React from "react";

function CheckOddOrEven(props) {
    return (
        <h2>{props.number} is {props.number % 2 === 0 ? "Even" : "Odd"}</h2>
    );
}
export default CheckOddOrEven;
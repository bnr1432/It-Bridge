import React from "react";

// function addNumber(a, b) {
//     return a + b;
// }

function AddNumber(props) {
    return ( 
       <h2>Sum of {props.a} and {props.b} is {props.a + props.b}</h2> 
    );
}


export default AddNumber;
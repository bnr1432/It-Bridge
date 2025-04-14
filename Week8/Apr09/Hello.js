

// const math = require('./functions'); 
// console.log(math.add(5, 3));       // Output: 8
// console.log(math.multiply(5, 3));  // Output: 15


//Direct function export we can use this in app.js file
// const math = require('./functions'); 
// console.log(math.minus(5, 3)); 


// For Multiple files Exports we use this
const math = require('./functions');
console.log(math.addTwoNumber(5, 3));        
console.log(math.multiplyTwoNumber(5, 3));   

//This exports an object with a property called divide for this we use math.divide(10, 2)
// const math = require('./functions');
// console.log(math.div(120, 2)); 

// for Single function Export we use this
// const math = require('./functions');
// console.log(math(10, 2));



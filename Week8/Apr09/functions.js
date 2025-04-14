function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }


//Direct function export we can use this in Hello.js file
  exports.minus = function(a, b) {
    return a - b;
  };


  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }


  
  // For Multiple files Exports we use this 
  // module.exports = {
  //   add,
  //   multiply
  // };

  // another way to export the functions
  //is exporting an object with custom property names pointing to your internal functions.
  // The external name addTwoNumber refers to the internal function add
    module.exports = {
    addTwoNumber : add,
    multiplyTwoNumber : multiply
  };
  
  //This exports an object with a property called divide for this we use math.divide(10, 2)
  module.exports.div = divide; 

  // For Single function Export we use this
  // module.exports = divide; 
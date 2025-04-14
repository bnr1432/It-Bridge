// const greatest = require('./util');
// console.log(greatest.GreatestThreeNumber(5,3,7)); 



const prompt = require('prompt-sync')();
const greatest = require('./util');

const a = parseFloat(prompt("Enter first number: "));
const b = parseFloat(prompt("Enter second number: "));
const c = parseFloat(prompt("Enter third number: "));

console.log(greatest.GreatestThreeNumber(a,b,c));      

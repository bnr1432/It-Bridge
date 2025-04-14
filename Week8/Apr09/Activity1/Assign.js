
const getDaysLeft = require('./Activity');

const day = parseInt(process.argv[2]);
const month = parseInt(process.argv[3]);
const year = parseInt(process.argv[4]);

const daysLeft = getDaysLeft(day, month, year);
console.log(`Days left till 31st December ${year} : ${daysLeft}`);

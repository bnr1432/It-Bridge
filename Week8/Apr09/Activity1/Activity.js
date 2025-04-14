// //Take the input in the form of arguments from the command line
// const day = parseInt(process.argv[2]);
// const month = parseInt(process.argv[3]);
// const year = parseInt(process.argv[4]);

// //fix the values to the date
// const givenDate = new Date(year, month - 1, day);

// //calculate that year
// const endDate = new Date(year, 11, 31); 

// //calaculating milieseconds
// const oneDay = 1000 * 60 * 60 * 24;

// //.getTime() converts a date into milliseconds.
// const diffInTime = endDate.getTime() - givenDate.getTime();

// //Use Math.ceil() to round up to the nearest whole day.
// const diffInDays = Math.ceil(diffInTime / oneDay);

// //Display the result
// console.log(`Days left till 31st December ${year} : ${diffInDays}`);






// //Use Math.ceil() to round up to the nearest whole day.



function getDaysLeft(day, month, year) {

    const givenDate = new Date(year, month - 1, day);

    const endDate = new Date(year, 11, 31);

    const oneDay = 1000 * 60 * 60 * 24;
  
    const diffInTime = endDate.getTime() - givenDate.getTime();

    const diffInDays = Math.ceil(diffInTime / oneDay);
  
    return diffInDays;
  }
  
  module.exports = getDaysLeft;
  

/* Find the leap year of given year */

// A year is a leap year if the following conditions are satisfied:

// - The year is a multiple of 400.
// - The year is a multiple of 4 and not a multiple of 100.

// !year%400 || !year%4 && year%100

((year)=>{
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
})(2000);
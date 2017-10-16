// 20: Git history shows frequent commits.
// 10: package.json is provided when your code has package dependencies.
// 10: Your tests for part 1 can be run with the command $ npm test.

// Show a weekday
//  10: A test using expected/valid inputs for the weekday() function is written in tests.js.
//  10: A test using unexpected/invalid inputs for the weekday() function is written in tests.js.
//  30: Correct implementation of the weekday() is defined in functions.js.
//  10: Tests for weekday() are passing.

function weekday(date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = days[date.getDay()];
  return day;
}

// const d = new Date(1969, 8, 23); // June 19, 2017

// console.log(weekday(d));

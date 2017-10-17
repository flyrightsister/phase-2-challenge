/** *************************
      Show a weekday
************************** */
// Implementation: weekday(date) takes date object as input
// Example: weekday(new Date(2017, 5, 19));  // => "Mon"
function weekday(date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = days[date.getDay()];
  return day;
}

/** *************************
      Get a snippet
************************** */
/* Implementation: snippet(string, maxlength) takes a string and maxlength as arguments. It shortens the string to the maxlength and adds the ellipsis character ("…") to the end of string, and then returns the shortened string. If the string is shorter than the maxlength, just return the string unmodified.
Example: snippet("For the following exercises,", 10); // => "For the fo…" */
function snippet(string, maxlength) {
  if (typeof string !== 'string') {
    return 'First argument must be a string';
  }
  if (typeof maxlength !== 'number') {
    return 'Second argument must be a number';
  }
  if (string.length > maxlength) {
    return `${string.slice(0, maxlength)}\u2026`;
  }
  return string;
}

/** *************************
    Number of properties
************************** */
/* Implementation: numProps(obj) takes and object as an argument and returns the number of its non-inherited properties.
Example: numProps({name: 'Dominique'}); // => 1 */
function numProps(obj) {
  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
    return Object.keys(obj).length;
  }
  return 'Argument must be an object, not null, and not and array';
}

/** *************************
    Filter between
************************** */
/* Implementation: filterBetween(array, min, max) takes an array of numbers, a min value, and a max value. It returns a new array containing only the elements that are greater than or equal to min and less than or equal to max.
Example: filterBetween([5, 15, 25, 30, 35], 15, 34) // => [15, 25, 30] */

function filterBetween(array, min, max) {
  const filteredArray = [];
  if (!Array.isArray(array) || array === undefined) {
    return 'First argument is required and must be an array.';
  }
  if (!Number.isFinite(min) || !Number.isFinite(max) || array === undefined) {
    return 'Second and third argument are required and must be a number.';
  }
  array.forEach((number) => {
    if (number >= min && number <= max) {
      filteredArray.push(number);
    }
  });
  return filteredArray;
}

// console.log(filterBetween([5, 15, 25, 30, 35], 15, 34));
// console.log(filterBetween(array, min, max));

module.exports = {
  weekday,
  snippet,
  numProps,
  filterBetween,
};

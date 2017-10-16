/** *************************
      Show a weekday
************************** */
// Implementation: weekday function takes date object as input
// Example: weekday(new Date(2017, 5, 19));  => returns "Mon"
function weekday(date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = days[date.getDay()];
  return day;
}

// console.log(weekday('blah'));
module.exports = weekday;

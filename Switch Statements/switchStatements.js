
// Day of the week

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return 'Sunday';
    case 2:
      return 'Monday';
    case 3:
      return 'Tuesday';
    case 4:
      return 'Wednesday';
    case 5:
      return 'Thursday';
    case 6:
      return 'Friday';
    case 7:
      return 'Saturday';
    default:
      return 'Invalid day number';
  }
}

console.log(getDayName(3)); // Tuesday
console.log(getDayName(7)); // Saturday
console.log(getDayName(0)); // Invalid day number

// For Loop
function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
console.log(printNumbers()); // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// While Loop
function printEvenNumbers() {
  let i = 2;
  while (i <= 20) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
}
console.log(printEvenNumbers()); // Output: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// Do-While Loop
function printOddNumbers() {
  let i = 1;
  do {
    if (i % 2 !== 0) {
      console.log(i);
    }
    i++;
  } while (i <= 20);
}
console.log(printOddNumbers()); // Output: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
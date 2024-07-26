// Create a function named as greet which will print “Hello World, {YOUR_NAME}” after 10 seconds.
function greet(name) {
    setTimeout(function() {
      console.log(`Hello World, ${name}`);
    }, 10000);
}
greet("MD IMRUL KAYES"); // Outputs: Hello World, MD IMRUL KAYES.


//Create a function printNumbers that prints numbers from 1 to 10 at 1-second intervals.
function printNumbers() {
    let number = 1;
    const intervalId = setInterval(function() {
      console.log(number);
      if (number === 10) {
        clearInterval(intervalId);
      }
      number++;
    }, 1000);
}
printNumbers(); // Outputs : 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


//Create a function handleError that simulates an error and catches it using try...catch.
function handleError() {
    try {
      // simulate an error
      throw new Error("An error occurred");
    } catch (error) {
      // Handle the error
      console.log("I have handled the error successfully.");
    }
}
handleError(); // Outputs: I have handled the error successfully.
  

//Create a Promise that either resolves or rejects based on a condition. 
function createPromise(condition) {
    return new Promise((resolve, reject) => {
      if (condition) {
        resolve("I am resolved");
      } else {
        reject("I am rejected");
      }
    });
}
  
createPromise(true)
  .then(message => {
      console.log(message); // Output: "I am resolved" if condition is true
  })
  .catch(message => {
      console.log(message); // Output: "I am rejected" if condition is false
  });




  
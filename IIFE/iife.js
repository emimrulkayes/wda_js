// This is an IIFE
(function() {
  console.log('Hello from IIFE');
})(); // Output: Hello from IIFE

// IIFE with parameters
(function(x, y){
  console.log(x + y);
}(5, 10)) // Output: 15

// IIFE to Avoid Polluting Global Scope
(function(){
  function greet(name){
    console.log(`Hello ${name}!`);
  }
  greet('World');
}()); // Output: Hello World!


// function scope
function testFunctionScope() {
  let insideFunction = 'Inside the function';
  console.log(insideFunction);
}
console.log('accessing insideFunction', insideFunction); // ReferenceError: insideFunction is not defined
testFunctionScope(); // Output: "Inside the function"

// Blcok scope with let and const
function testBlockScope() {
  if (true) {
    let insideBlock = 'Inside the block';
    console.log(insideBlock);
  }
  console.log(insideBlock); // try to access outside the block
}
testBlockScope(); // ReferenceError: insideBlock is not defined


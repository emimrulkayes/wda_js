
//Create a function createGreeting that takes two parameters, name and age.
function createGreeting(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
  }
const greeting = createGreeting("Zohan", 25);
console.log(greeting); // Output: Hello, my name is Zohan and I am 25 years old.
  

//Create a function calculateArea that takes two parameters, length and width.
function calculateArea(length, width = length) {
    return length * width;
}
console.log(calculateArea(5)); // Outputs: 25
console.log(calculateArea(5, 10)); // Outputs: 50

// create a function getStreetName that returns the street name if it exists.
const user = {
    address: {
        street: {
            name: "CR Dutta Road"
        }
    }
};
const userWithoutStreet = {
    address: {
        city: "Anytown"
    }
};
function getStreetName(user) {
    return user?.address?.street || "Street not found";
}
console.log(getStreetName(user)); // Output: CR Dutta Road
console.log(getStreetName(userWithoutStreet)); // Output: Street not found

// Create a function cleanUpString that takes a string, trims any leading or trailing whitespace
function cleanUpString(str) {
    let trimmedStr = str.trim();
    let cleanedStr = trimmedStr.replace(/white/g, "red");
    return cleanedStr;
}
console.log(cleanUpString("  white is white  ")); // Output: "red is red"
    

// Create a function processArray that takes an array of strings.
function processArray(arr) {
    return arr
      .map(str => {
        const [name, age] = str.split('-');
        return { name, age: parseInt(age) };
    })
    .filter(person => person.age >= 18);
}

const input = ["Zohan-25", "Wafi-17", "Saher-19"];
console.log(processArray(input)); 
// Output: [{ name: "Zohan", age: 25 }, { name: "Saher", age: 19 }]

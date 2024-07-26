// Utility function
function calculateArea() {
    return this.width * this.height;
}
// Object 1
const rectangle = {
width: 10, height: 20
};
// Object 2
const square = {
width: 15, height: 15
};

// Result for rectangle.
calculateArea.call(rectangle); // Output: 200
const resultRec = calculateArea.bind(rectangle); 
resultRec(); // Output: 200

// Result for Square.
calculateArea.call(square); // Output: 225
const resultSq = calculateArea.bind(square); 
resultSq(); // 225



// Constructor function
function User(name, email) {
    this.name = name;
    this.email = email;
};

User.prototype.login = function() {
    console.log(`${this.name} is now online.`);
};

const user1 = new User('Zohan', 'zohan@example.com');
user1.login(); // Output: Zohan is now online.



// Class function
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    };

    login() {
        console.log(`${this.name} is now online.`);
    };
};

const user2 = new User('Zohan', 'zohan@example.com');
user2.login(); // Output: Zohan is now online.


// Prototype Chain
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes sound.!`);
}

function Dog(name) {
    Animal.call(this, name); // Call the parent constructor.
}

Dog.prototype = Object.create(Animal.prototype); //Inherit from Animal
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
}

function Cat(name) {
    Animal.call(this, name); // Call the parent constructor
}

Cat.prototype = Object.create(Animal.prototype); //Inherit from Animal
Cat.prototype.constructor = Cat;

Cat.prototype.speak = function() {
    console.log(`${this.name} meaw.!`);
}

const dog = new Dog('Kader');
const cat1 = new Cat('Bulbuli');
dog.speak(); // Outputs: Kader barks.
cat1.speak(); // Outputs: Bulbuli meaw.!


// Class Inheritance.
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes sound.`);
    }
}

// Extend Animal class.
class Cow extends Animal {
    constructor(name, bulbul) {
        super(name);
        this.bulbul = bulbul;
    }
    speak() {
        console.log(`${this.name} make sound Humba.`);
    }
}

const cow = new Cow('Dewan', 'German Shepherd');
cow.speak();

// Extend Animal class.
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(`${this.name} make sound Meaw!`);
    }
}

const cat = new Cat('Cat');
cat.speak();

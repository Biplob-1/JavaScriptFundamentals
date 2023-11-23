// Superclass (or Parent class)
class Animal {
  constructor(name) {
    this.name = name;
  }
  // // Methods
  eat() {
    // console.log(`${this.name} is eating.`); //
    console.log(this.name + ' is eating');
  }
}

// Subclass (or Child class) inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    // Call the constructor of the superclass using super()
    super(name);
    this.breed = breed;
  }

  bark() {
    // console.log(`${this.name} is barking.`);
    console.log(this.name + ' is barking');
  }
}

// Creating instances of the classes using 'new' keyword
const genericAnimal = new Animal('Generic Animal');
const myDog = new Dog('Buddy', 'Golden Retriever');

// Using the instances
genericAnimal.eat(); // Output: Generic Animal is eating.
myDog.eat();        // Output: Buddy is eating.
myDog.bark();       // Output: Buddy is barking.


// get set Methods
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.error('Error: Width must be a positive number.');
      return; // Added return statement to exit the function
    }
  }
}

const myRectangle = new Rectangle(10, 5);
console.log('Output: ' + myRectangle.area); // Output: 50

myRectangle.width = 8;
console.log('Output: ' + myRectangle.area); // Output: 40

myRectangle.width = -5; // This will print the error message and not execute the next console.log
// console.log('Output: ' + myRectangle.area); 



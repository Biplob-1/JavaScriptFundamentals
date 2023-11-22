// Superclass (or Parent class)
class Animal {
  constructor(name) {
    this.name = name;
  }
  // // Methods
  eat() {
    console.log(`${this.name} is eating.`);
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
    console.log(`${this.name} is barking.`);
  }
}

// Creating instances of the classes using 'new' keyword
const genericAnimal = new Animal('Generic Animal');
const myDog = new Dog('Buddy', 'Golden Retriever');

// Using the instances
genericAnimal.eat(); // Output: Generic Animal is eating.
myDog.eat();        // Output: Buddy is eating.
myDog.bark();       // Output: Buddy is barking.

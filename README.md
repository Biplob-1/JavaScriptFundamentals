# JavaScriptFundamentals
 
# React ES6 classes

1. The `Animal` class is the `superclass`, and it has a `constructor` for setting the `name` property and a `method` `eat`. <br>
2. The `Dog` class is the `subclass`, and it uses `extends Animal` to indicate that it inherits from the `Animal class`. It also has its own constructor, which calls the superclass constructor using `super(name)`, and a `method bark`. <br>
3. Instances of `Dog` not only have access to their own methods `(bark)` but also inherit the methods of the `Animal` class `(eat)`.

```javascript
// Superclass (or Parent class)
class Animal {
  constructor(name) {
    this.name = name;
  }

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




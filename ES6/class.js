class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;

    }
// Create a Class method named "age"
    age () {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}
const myCar = new Car("Audi", 2019);
console.log("I wish I have a "+myCar.name +" "+ myCar.year +".");
console.log('My car is ' + myCar.age() + ' years old.')
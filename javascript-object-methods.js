// ES6 provides concise method syntax that allows you to define a method for an object:
let person ={
    firstName : 'Biplob',
    lastName : 'Sarkar',
    greet() {
    console.log('hello world');
    },
    // access a property using the this value
    getFullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.getFullName());
person.greet();


const car = {
    name : 'Fiat',
    model : 589,
    weight : '1200kg',
}

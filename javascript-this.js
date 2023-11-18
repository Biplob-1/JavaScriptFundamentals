// Function invocation
function show() {
    "use strict";
    console.log(this === undefined); //true
    function display() {
        console.log(this === undefined); //true
    }
    display();
}
show();

// Method invocation
let car = {
    brand: 'honda',
    getBrand : function () {
        return this.brand;
    }
}
let bike = {
    brand: 'harly davidson'
}
let brand = car.getBrand.bind(bike);
console.log(brand());
console.log(car.getBrand()); //honda

// Constructor invocation
globalThis === window
class Car{
    constructor(name){
        this.brand = name;
    }
    present(){
        return "I have a " + this.brand;
    }
}
class Model extends Car{ //create a class inheritance, use the extends keyword
    constructor(name, mod){
        super(name); // used to call the constructor of its parent class to access the parent's properties and methods.
        this.model = mod;
    }
    show(){
        return this.present() + ", it is a " + this.model;
    }
}
const myCar = new Model("Ford", "Mustang");
// myCar.show();
console.log(myCar.show());
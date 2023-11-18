// To define an accessor property must use the Object.defineProperty() method
let person ={
    firstName : 'Biplob',
    lastName : 'Sarkar'
}
Object.defineProperty(person , 'fullName',{
    get : function () {
        return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName =parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format.';
        }
    }
});
console.log(person.fullName);

// Define multiple properties: Object.defineProperties
var product = {};

Object.defineProperties(product, {
    name: {
        value : 'Smartphone'
    },
    price : {
        value: 799
    },
    tax: {
        value : 0.1
    },
    netPrice : {
        get : function () {
            return this.price * (1+ this.tax);
        }
    }
});
console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(3) + ' USD.');
// remainder operator means vagsesh ber kora 
let remainder = 5 % -2;
console.log(remainder); // 1

remainder = 5 % 2;
console.log(remainder); // 1 

let counter = 0;
counter = counter +10;
console.log(counter);



let f1 = 'apple',
    f2 = 'Banana';
let result = f2 > f1;
console.log(result); // false
let a1 = 'apple',
    b1 = 'Banana';
let results = a1 > b1;
console.log(results); // true


// Compare an object with a non-object
let apple ={
    valueOf: function(){
        return 10;
    },
};

let banana ={
    toString: function(){
        return '20';
    },
};

console.log(apple>10); // false
console.log(banana==20); // true







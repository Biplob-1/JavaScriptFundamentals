let colors =['red', 'green', 'blue', 'black'];
console.log(colors); //Outputs: [ 'red', 'green', 'blue', 'black' ] 


// To add an element to the end of an array using the push() method
colors.push('yellow');

// To add an element to the beginning of an array using the unshift() method

colors.unshift('white');

// To remove an element from the end of an array using the pop() method
const lasteElement= colors.pop();

// To remove an element from the beginning of an array using the shift() method
const firstElement = colors.shift();

// To find the index of an element using the  indexOf() method
let index = colors.indexOf('green');

// To check if a value is an array using Array.isArray() method
console.log(Array.isArray(colors));

console.log(colors);
console.log(index);


				// sort()



// sort() method sorts an array alphabetically
const vegetables = ["alu", "potol", "begun", "morich"];
let veg = vegetables.sort();
console.log(veg); //Outputs: [ 'alu', 'begun', 'morich', 'potol' ] 



// forEach(), map(), filter(); reduce() and sort()
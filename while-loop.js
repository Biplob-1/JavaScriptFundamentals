const numbers = [1, 2, 3, 4, 5];
let x = 0;

while (x < numbers.length) {
  console.log(numbers[x]);
  x++;
}

let z =1;
while (z<10) {
    console.log(z);
    z +=2
}


let userInput;
let number;

do {
  userInput = prompt("Please enter a number:");
  number = parseInt(userInput);
} while (isNaN(number));

console.log("You entered a valid number: " + number);


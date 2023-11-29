
/* JavaScript String Methods

		NB:	"All string methods return a new string. They don't modify the original string."

String split()
*/

//The length property returns the number of characters in a string.
//provides the actual count of characters, including spaces and punctuation.
let message = "Hello, world"; 
console.log(message.length); // Outputs:12 

// Validating the length of a user's input in a form.
// let userInput = /* user's input */;

// if (userInput.length > 0) {
//   // Proceed with further processing
// } else {
//   // Display an error message
// }


				// slice(start, end)


let text = "I love my country very much.";
console.log(text.slice(0, 6)); //Outputs: I love
console.log(text.slice(7)); //Outputs: my country very much.  

//when a parameter is negetive, the position is counted from the end of the string.
console.log(text.slice(-5)); //Outputs: much. 

// slices out a portion of a string from position -10 to position -6
console.log(text.slice(-10,-6)); //Outputs: very 


				// substring(start, end)


console.log(text.substring(0,6)); //Outputs: I love
console.log(text.substring(7)); //Outputs: my country very much. 

// slice is similer to substring, only difference is handeling negetive index

console.log(text.substring(-5)); //Outputs: I love my country very much.

// start and end values less than 0 are treated as 0
console.log(text.substring(-10,-6)); //Outputs: blank


				// substr(start, length)


/* substr() is similar to slice()
 The difference is that the second parameter specifies the length of the extracted part
*/
console.log(text.substr(2,4)); //Outputs: love
console.log(text.substr(2)); //Outputs: love my country very much.
// If the first parameter is negative, the position counts from the end of the string
console.log(text.substr(-5)); //Outputs: much.
console.log(text.substr(-2,-10)); //Outputs: blank


				// String replace() method 

/* 	The replace() method does not change the string it is called on.

	The replace() method returns a new string.

	The replace() method replaces only the first match 
*/

let contant = "Hello, I am Biplob. Biplob is a math teacher.";
let newContant = contant.replace("Biplob", "Sadik");
console.log(newContant); //Outputs: Hello, I am Sadik.
// replace() method is case sensitive.
// replace case insensitive, use a regular expression with an /i flag (insensitive
let updateContant = contant.replace(/BIPLOB/i, "Limon")
console.log(updateContant);
// replace all matches, use a regular expression with a /g flag (global match)
let replacesAll = contant.replace(/Biplob/g, "Likhon"); //replaceAll() is a javascript method.
console.log(replacesAll);


				// JavaScript String ReplaceAll()

// replaceAll() is an ES2021 feature
const originalString = 'I love cats. Cats are very easy to love. Cats are very popular';

const replacedString = originalString.replaceAll('Cats', 'Dogs').replaceAll('cats', 'dogs');

console.log(replacedString); //Outputs: I love dogs. Dogs are very easy to love. Dogs are very popular



				// String toUpperCase()

// convert all the alphabetic characters in a string to uppercase
const orginalAlphabet ="Hello, world."

const replaceAlphabet =orginalAlphabet.toUpperCase();

console.log(replaceAlphabet); //Outputs: HELLO, WORLD.




				// String toLowerCase()

// convert all the alphabetic characters in a string to lowercase
const orginalAlpha = "HELLO , World.";

const replaceAlpha = orginalAlpha.toLowerCase();

console.log(replaceAlpha); //Outputs: hello , world.





				// String trim()

// trim() method removes whitespace from both sides of a string
const stringWithWhitespace = '   Hello, World!   ';
const trimmedString = stringWithWhitespace.trim();

console.log(trimmedString); //Outputs: Hello, World!

// Whitespaces in the middle of the string are not affected
//trimStart() removes whitespace only from the start of a string
//trimEnd() removes whitespace only from the end of a string



				// String split()

 // string can be converted to an array usong split() method
const fruitsString = "Mango Apple Banana Orange";
const fruitsArray = fruitsString.split(' ');
console.log(fruitsArray); //Outputs: [ 'Mango', 'Apple', 'Banana', 'Orange' ]   


				// String indexOf()


// indexOf methods return the index first occurrence
const serchIndexOf = "apple, banana, 'mango', pineapple, mango";

const indexOfMango = serchIndexOf.indexOf("mango"); //indexOf() is case-sensitive

console.log(indexOfMango); // Output: 16

// we can provide an optional second parameter to specify the starting index for the serch 
const serchIndexOfBanana = "apple, banana, mango, pineapple"; //JavaScript counts positions from zero.

const indexOfBanana = serchIndexOfBanana.indexOf("banana", 5); //serch start index 4, 

console.log(indexOfBanana); //Outputs: 7


				// String lastIndexOf()


// lastIndexOf methods return the index last occurrence
const serchLastIndexOfBanana = "apple, banana, mango, pineapple, 'banana'";

const lastIndexOfBanana = serchLastIndexOfBanana.lastIndexOf("banana") ;

console.log(lastIndexOfBanana); //Outputs: 34

// N.B: Both indexOf(), and lastIndexOf() return -1 if the text is not found
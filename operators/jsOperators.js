 				// arithmetic-operators

 let x = 10;
 let y = 3;

 console.log(x + y); //Outputs: 13
 console.log(x - y); //Outputs: 7
 console.log(x * y); //Outputs: 30
 console.log(x / y); //Outputs: 3.3333333333333335
 console.log(x % y); //Outputs: 1 vagsesh
 console.log(x ** y); //Outputs: 1000 ten to the power 3.

// Increment ++
console.log(++x); //Outputs: 11
console.log(x++); //Outputs: First 10 then 11
// console.log(x); //Outputs: 11

// Decrement --
// console.log(--y); //Outputs: 2
console.log(y--); //Outputs: First 3 then 2
console.log(y); //Outputs: 2

				// Assignment Operators
let a = 10;
let b = 3;

console.log(a += b) // same as console.log(x + y); //Outputs: 13
console.log(a-= b) // same as console.log(x - y); //Outputs: 7
console.log(a *= b) // same as console.log(x * y); //Outputs: 30
console.log(a /= b) // same as console.log(x / y); //Outputs: 3.3333333333333335
console.log(a %= b) // same as console.log(x % y); //Outputs: 1 vagsesh
console.log(a**= b) // same as onsole.log(x ** y); //Outputs: 1000 ten to the power 3.


				// Comparison Operators

let age = 30;

//Relational
console.log(age >0); //Outputs: True
console.log(age >=0); //Outputs: True
console.log(age <=0); //Outputs: False
console.log(age <=0); //Outputs: False

//Equality
console.log(age === 30); //Outputs: True
console.log(age !== 30); //Outputs: False


				//Equality Operators


//Strict Equality (Type + Value)
console.log(1 === 1) //Outputs: True
console.log('1' === 1) //Outputs: False


//Lose Equality (Value)
console.log(1 == 1) //Outputs: True
console.log('1' == 1) //Outputs: True
console.log(true == 1) //Outputs: True



				//Ternary Operator Start >>>>


/* If a customer have more than 100 points,
	They are a 'Gold' customer
	otherwise 'Silver' customer
*/
let points = 110;
let type = points > 100 ? 'Gold' : 'Silver'; 

console.log(points); //Outputs: Gold

				//Ternary Operator End >>>>

				//Logical Operator Start

// Logical And (&&)
// Returns True if both operands are True
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan); //Outputs: true


// Logical OR (||)
// Returns True if one of the operands are True
let highIncomes = true;
let goodCreditScores = false;
let eligibleForLoans = highIncomes || goodCreditScores;

console.log(eligibleForLoans); //Outputs: true


// NOT (!)
// Its opposit (AND & OR) OPERATOR
let highIncomess = false;
let goodCreditScoress = false;
let eligibleForLoanss = highIncomess || goodCreditScoress;

console.log('Eligible' + eligibleForLoanss); //outputs: Eligible fales

let applicationRefused = !eligibleForLoan;
console.log('Aplication Refused' + applicationRefused) //outputs: Aplication Refused true


				//Logical Operator End

				//BitWise Operator Start
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

// each of this bits given in a vertical way if either (duitai othoba duitar jekono ekta)
// of this bits is one its 1 otherwise 0
console.log(1 | 2); // R = 00000011 //Outputs: 3 BitWise OR
console.log(2 | 3); // R = 00000011 //Outputs: 3 BitWise OR

// Read , Write , Execute

// 00000100 = 4
// 00000010 = 2
// 00000001 = 1

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission); //Outputs : 6

let message = 
(myPermission & readPermission) ? 'yes' : 'no'; //teenary operator

console.log(message); // Outputs: yes





				//BitWise Operator End




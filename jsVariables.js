/* In javascript we can declare variables in four(4) ways.
	.Automatically
	.Using Var
	.Using Let
	.Using Const
  */

  // Automatically

  x = 10;
  y = 20;
  z = x + y;
  console.log(z); //it returns 30

  // var keyword
  // The var keyword was used in all JavaScript code from 1995 to 2015
  // var always have Global Scope

  var a = 10;
  var b = 20;
  var c = a + b;
  console.log(c); //it returns 30

  // var can be Redeclared
  var m = 10;
  var m = 0;
  console.log("Var can be Redeclared:" + m); //it returns 0

  // let keyword
  //The let and const keywords were added to JavaScript in 2015.

  let A = 20;
  let B = 30;
  let C = A + B;
  console.log(C); //It returns 50;

  // more about let varriables
/* The let varriables was introduced in ES6(2015).
   let have blocke scope and must be declared before use.


   let can't Redeclared in same scope.  */
   // let A = 30;
   // console.log(A); //SyntaxError: Identifier 'A' has already been declared

   


// JavaScript is case-sensitive when it comes to variable names.
// In this example a and A are two different variables.

// const keyword

const price1 = 20;
const price2 = 20;
let totalPrice = price1 + price2;

console.log(totalPrice); //It returns 40;





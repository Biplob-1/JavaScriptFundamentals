				//for loops

// for loop straucter

/*for (initialExpression; condition; incrementExpression) {
	statment 
}*/

for (let i = 1; i <= 5; i++) {
	//console.log('Hello Biplob', i);
	if (i % 2 !==0) console.log(i);
} 


// while loop
let i = 0;
while (i<=5) {
	if (i % 2 !== 0)  console.log(i);
	i++;	
}

				// Do...while loop
// the statement execute at list one time , if the conditions is false 
let index = 11;
do {
	if (index % 2 !== 0)  console.log(index);
	index++;
} while (index<=5); //Outputs: 11


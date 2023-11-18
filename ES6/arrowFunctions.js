//before
let hellow = function () {
    return "hello world"
};
console.log(hellow());



// with arrowFunction

hellow =() =>{
    return "hello world"
};
console.log(hellow());


//It gets shorter! If the function has only one statement, and the statement returns a value,

hellow=()=>"hello world"; //This works only if the function has only one statement
console.log(hellow()); 


// Arrow Function With Parameters

hellow=(val)=> "hellow " + val;
console.log(hellow('jon'));


// have only one parameter, you can skip the parentheses as well

hellow=val=> "hellow " + val;  //Arrow Function Without Parentheses
console.log(hellow('Biplob'));




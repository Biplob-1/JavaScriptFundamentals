// Passing undefined arguments
function createDiv(height = '100px', width = '100px', border ='solid 1px red') {
    let div = document.createElement('div');
    div.style.height= height;
    div.style.width = width;
    div.border = border;
    document.body.appendChild(div);
    return div;
}
// the createDiv() function uses the default values for the parameters.
createDiv();
// default values for the height and width parameters and specific border style
createDiv(undefined, undefined, 'solid 5px blue');

// Evaluating default parameters
function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log(put('Toy Car'));
// -> ['Toy Car']
console.log(put('Teddy Bear'));
// -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']

function date(d = today()) {
    console.log(d);
}
function today() {
    return (new Date()).toLocaleDateString("en-US");
}
date();

// Using other parameters in default values
function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

console.log(add()); // 4

function requiredArg() {
    throw new Error('The argument is required');
 }
 function add(x = requiredArg(), y = requiredArg()){
    return x + y;
 }
 
 add(10); // error
 add(10,20); // OK
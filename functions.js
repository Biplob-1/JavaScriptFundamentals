function add(a , b) {
    return a+b;
    
}
// let sum = add;
function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result = average(10, 20, add);
console.log('result: '+ result);

function compareBy(propertyName) {
    return function (a, b) {
        let x = a[propertyName],
            y = b[propertyName];
        if (x>y) {
            return 1;
        } else if (x<y) {
            return -1;
        } else {
            return 0;
        } 
            
        };
    }
    let products = [
        {name : 'iphone', price: '900'},
        {name : 'samsung galaxy', price : '850'},
        {name : 'sony xperia', price: '800'}
    ];
    
    console.log('products sorted by name:');
    products.sort(compareBy(' name '));
    
    console.table(products);
    console.log('index one price : ' + products[1].price);

    // sort products by prices
    console.log('products sorted by price:');
    products.sort(compareBy('price'));

    console.table(products);

    // two functions that convert a length in centimeters to inches and vice versa
    function cmToIn(length) {
        return length / 2.54;
    }
    
    function inToCm(length) {
        return length * 2.54;
    }

    function convert(fn, length) {
        return fn(length);
    }

    let inches = convert(cmToIn, 10);
    console.log('Centimeter To Inches:' + inches);

    let cm = convert(inToCm , 10);
    console.log('Inches To Centimeter:' + cm);
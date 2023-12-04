showNumbers(10);

function showNumbers(limit) {
    for(let i = 0; i <= limit; i++) {
        // if (i % 2 === 0) console.log( i, 'Evan');
        // else
        // console.log(i, 'Odd');
    const message =(i % 2 === 0) ? 'Evan' : 'Odd';
    console.log(i, message);
    }

}

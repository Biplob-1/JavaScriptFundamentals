// Speed limit = 70
// 5 -> 1 popint
// Math.floor(1.3) = 1
// 12 points -> suspended


checkSpeed(200);
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed -speedLimit) / kmPerPoint);
    if(points >= 12 )
    console.log('License suspend.')
    else
        console.log('Points:', points);
    
}


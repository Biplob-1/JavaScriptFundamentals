let day = 3;
let dayName;
switch (day) {
    case 1: 
        dayName = 'Saturday';
        
        break;
    case 2:
        dayName = 'Sunday';

        break;
    case 3:
        dayName = 'Monday';
    
        break;
    case 4:
        dayName = 'Tuesday';
    
        break;
    case 5:
        dayName = 'Wednesday';
    
        break;
    case 6:
        dayName = 'Thursday';
    
        break;
    case 7:
        dayName = 'Friday';

        break;

    default:
        dayName = 'Invalid day name.';

        break;
}
console.log(dayName);

let year = 2016;
let month = 2;
let dayCount;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    // leap year
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      dayCount = 29;
    } else {
      dayCount = 28;
    }
    break;
  default:
    dayCount = -1; // invalid month
}

console.log(dayCount); // 29

window.onload = function() {
    let dayy;
  
    switch (new Date().getDay()) {
      case 0:
        dayy = 'Sunday';
        break;
      case 1:
        dayy = 'Monday';
        break;
      case 2:
        dayy = 'Tuesday';
        break;
      case 3:
        dayy = 'Wednesday';
        break;
      case 4:
        dayy = 'Thursday';
        break;
      case 5:
        dayy = 'Friday';
        break;
      case 6:
        dayy = 'Saturday';
        break;
      default:
        dayy = 'Day is not valid';
    }
  
    console.log("Today is " + dayy);
  };
  
/*two type of conditionals in javaScript
	1. if...else and
	2. Switch...case
*/

				//if...else condition start

// Hour
// If our is between 6 am and 12 pm : Good morning!
// If our is between 12 Pm and 6 pm : Good afternoon!
// Otherwise : Good evening!

let hour = 10; // 24 hours format
if (hour >= 6 &&  hour < 12) 
	console.log('Good morning!');
else if (hour >= 12 && hour < 18) 
	console.log('Good afternoon!');
else 
	console.log('Good evening!'); //Outputs: Good morning!

				//if...else condition end

				// Switch...case condition start

let role ;

switch (role) {
	case 'guest':
		console.log('Guest user');
		break;

	case 'moderator' :
		console.log('Moderetor user');
		break;

	default:
		console.log('Unknown user'); //Outputs: Unknown user
		break; // break na dileo hobe default er jonno
}

				// Switch...case condition end
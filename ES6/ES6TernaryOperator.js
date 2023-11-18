// The ternary operator is a simplified conditional operator like if / else
// const renderApp = () => {
//     console.log('welcome');
// };

// const renderLogin = () => {
//     console.log('please log in');
// };

// let authenticated = false;

// if (authenticated) {
//     renderApp();
// } else {
//     renderLogin();
// }

// combines the arrow functions with the ternary operator to make the code more concise.

const renderApp = () => console.log('welcome'); //arrow function
const renderLogin = () => console.log('please log in'); //arrow function

let authenticated = false;

authenticated ? renderApp() : renderLogin();  //ternary operator



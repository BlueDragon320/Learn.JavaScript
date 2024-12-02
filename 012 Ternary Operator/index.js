/* Ternary operator = a shortcut to if{} and else{} statements helps to assign a varible based on a considtion ? codeIfTrue : CodeIfFalse; */

// let age = 21;
// let message = age >= 18 ? "You're an adult" : "Your a minor";
// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);

let price = 10;
let discount = price >= 100 ? "You are getting a 10% discount" :   `Your total is ${price}`;
console.log(discount)
// Number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running = true){
    guess=window.prompt(`Guess a number between 1 to 100`);
    guess = Number(guess);
    console.log(typeof guess, guess);
    running = false;
}

console.log(answer);
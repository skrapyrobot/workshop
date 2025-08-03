// You can add your imports or exports here
// example:
// export * from './Index';
// import { Index } from './Index';

let userInput = prompt(
    'please enter the number you would like to FizzBuzz up to'
);
if (userInput) {
    let answer = parseInt(userInput);
    if (answer > 0) {
        for (let index = 0; index < answer; index++) {
            if (index % 3 === 0 && index % 5 === 0) {
                console.log('FizzBuzz');
            } else if (index % 3 === 0) {
                console.log('Fizz');
            } else if (index % 5 === 0) {
                console.log('Buzz');
            } else {
                console.log(index);
            }
        }
    } else {
        console.log('Input is not a positive integer');
    }
} else {
    console.log('No user input');
}

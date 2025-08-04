// You can add your imports or exports here
// example:
// export * from './Index';
// import { Index } from './Index';

function getAChoise() {
    return Math.floor(Math.random() * 3);
}

let userScore = 0;
let computerScore = 0;
let values = ['rock', 'paper', 'scissor'];

let rounds = 5;
for (let index = 0; index < rounds; index++) {
    let userInput = parseInt(
        prompt(
            `Please enter a value between 0 and 2: Round ${index} out of ${rounds}`
        )!
    );
    let computerChoice = getAChoise();

    if (userInput > 2) {
        userInput = 2;
    }
    if (userInput !== undefined) {
        console.log('You  | Computer');
        console.log(`${values[userInput]} | ${values[computerChoice]}`);

        let result = userInput - computerChoice;
        if (userInput === computerChoice) {
            computerScore++;
            userScore++;
            console.log('tables');
        } else if (result == -1 || result == 2) {
            console.log('Computer wins this round');
            computerScore++;
        } else {
            console.log('User wins this round');
            userScore++;
        }
    } else {
        console.log('Computer wins this round (No user input)');
        computerScore++;
    }
    console.log('');
}
console.log('Total score:');
console.log(`User: ${userScore}`);
console.log(`computer: ${computerScore}`);
if (computerScore === userScore) {
    console.log('Tables');
} else if (computerScore > userScore) {
    console.log('computer wins');
} else {
    console.log('User wins');
}

// Steps
// User enters their choice
// Computer randomly decides its choice

// rock 0
// paper 1
// scissor 2

// 0-1 = -1 negative, user win
// 0-2 = -2 negative, user loses
// 1-2 = -1 negative, user win
// 1-0 = 1, non-negative, user loses
// 2-0 = 0 non-negative, user loses
// 2-1 = 1 non-negative, user loses

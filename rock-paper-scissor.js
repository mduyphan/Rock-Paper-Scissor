// Connstant Definition
// ================
let humanScore = 0;
let computerScore = 0;
let i = 0

// Data Definition
// ================

// Choice is one of:
//	- "rock"
//	- "paper"
//	- "scissor"

const C1 = "Rock";
const C2 = "Paper";

/*
function fnForChoice (c) {
    switch(c) {
    case "rock":
	...;	
	break;
    case "paper":
	...;
	break;
    case "scissor":
	...;
	break;
    }
}
*/

// Template rule used:
//	- atomic distinct: String
//	- atomic distinct: String
//	- atomic distinct: String

// Function Definition
// ================
// Null -> String
// Main program
function playGame() {
    while (i <= 4) {
	const humanSelection = getHumanChoice();
	const computerSelection = compChoice(4);
	playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
	console.log(`Congrats! You won the game!\n Final Score:
Player:\t${humanScore}
Computer:\t${computerScore}`);
    } else {
	console.log(`Better luck next time! You lost the game!\n Final Score:
Player:		${humanScore}
Computer:	${computerScore}`);
    }
}

// Choice Choice -> String
// Take in two choices and output the winner
// playRound ("rock", "scissor") Expect: "You win! Rock beats Scissor"
// playRound ("scissor", "scissor") Expect: "Draw! Scissor draw to Scissor"
// playRound ("rock", "paper") Expect: "You lose! Paper beats Rock"

//function playRound (humanC, compC) { return "You lose! Paper beats Rock"; } // stub

function playRound (humanC, compC) {
    let winPlay = winner(humanC, compC);
    if (winPlay == humanC) {
	console.log(`You win! ${capitalize(humanC)} beats ${capitalize(compC)}`);
	humanScore += 1;
	i += 1;
	console.log(`Current Score ${humanScore} : ${computerScore}`)
    } else if (winPlay == compC) {
	console.log(`You lose! ${capitalize(compC)} beats ${capitalize(humanC)}`);
	computerScore += 1;
	i += 1;
	console.log(`Current Score ${humanScore} : ${computerScore}`)
    } else {
	console.log(`Draw! ${capitalize(humanC)} and ${capitalize(compC)}`)
    }
}

// Number -> Choice
// Consume  parameter n and produce random value of Choice
// compChoice(4) Expect: 0 or 1 or 2 or 3
// compChoice(2) Expect: 0 or 1

//function compChoice (n) { return "Rock"; } // stub

function compChoice (n) {
    let i = Math.floor(Math.random() * n);
    if (i < 1) {
	console.log(`Computer choosed Rock`);
	return "rock";
    } else if (i < 2) {
	console.log(`Computer choosed Paper`);
	return "paper";
    } else {
	console.log(`Computer choosed Scissor`);
	return "scissor";
    }
}

// Choice -> String
// Prompt user for a string (must be one of the three choices) and repeat user choice
// getHumanChoice("Paper") Expect: "User choosed Paper"
// getHumanChoice(Paper) Expect: "User choosed Paper"
// getHumanChoice(1) Expect: "Invalid input! Please try again"

//function getHumanChoice (c) { return "User choosed Rock" } // stub


function getHumanChoice () {
    let pChoice = prompt("Enter a valid choice: ", "Paper");
    let c = pChoice.toLowerCase();
    switch (c) {
    case "rock":
	console.log("User choosed Rock");
	return c;
	break;

    case "paper":
	console.log("User choosed Paper");
	return c;
	break;

    case "scissor":
	console.log("User choosed Scissor");
	return c;
	break;

    default:
	alert("Invalid input! Please try again");
	return getHumanChoice();
    }
}

// Choice Choice -> Choice
// Consume choose choice parameter and return the winner choice. Including draw possiblilities as well.
// winner("rock", "rock") Expect: "draw";
// winner("rock", "scissor") Expect: "rock";
// winner("scissor", "paper") Expect: "scissor";

//function winner(c1, c2) {return "draw";} // stub

function winner(c1, c2) {
    if (c1 == c2) {
	return "draw";
    } else if (c1 == "rock" && c2 == "scissor") {
	return "rock";
    } else if (c1 == "scissor" && c2 == "rock") {
	return "rock";
    } else if (c1 == "paper" && c2 == "rock") {
	return "paper";
    } else if (c1 == "rock" && c2 == "paper") {
	return "paper";
    } else if (c1 == "scissor" && c2 == "paper") {
	return "scissor";
    } else if (c1 == "paper" && c2 == "scissor") {
	return "scissor";
    }
}

// String -> String
// Capitalize a string word str
// capitalize("abc") Expect: "Abc"
// capitalize("abc bcb") Expect: "Abc bcb"

//function capitalize(str) {""}	// stub

function capitalize (str) {
    return str[0].toUpperCase() + str.substring(1);
}



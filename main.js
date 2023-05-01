const getUserInput = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "scissors" || userInput === "paper"){
        return userInput;
    } else {
        console.log("Error, please enter: rock, paper, or scissors.");
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

const decideWinner = (userChoice, computerChoice) => {
   if (userChoice === computerChoice){
    return "Tie game!"
   }
    if (userChoice === "rock"){
        if (computerChoice === "paper"){
            return "You lose! Paper beats rock!";
        } else {
            return "You win! Rock beats scissors!";
        }
    }
    if (userChoice === "paper"){
        if (computerChoice === "scissors"){
            return "You lose! Scissors beats paper!";
        } else {
            return "You win! Paper beats rock!";
        }
    }
    if (userChoice === "scissors"){
        if (computerChoice === "rock"){
            return "You lose! Rock beats scissors!";
        } else {
            return "You win! Scissors beats paper!";
        }
    }
}

const playGame = () => {
    const userChoice = getUserInput("paper");
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(decideWinner(userChoice, computerChoice));
}

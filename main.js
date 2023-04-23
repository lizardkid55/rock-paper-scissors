let choices = ["rock", "paper", "scissors"];


var computerChoice = (function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
})();


function playerChoice(choice){
    switch(choice){
        case "rock":
            if (choice === "rock" && computerChoice ==="scissors"){
                return "You Win! Your " + choice + " beats " + computerChoice + " ."
            } else if (choice === "rock" && computerChoice === "paper"){
                return "You Lose! Your " + choice + " was beat by " + computerChoice + " ."
            } else{
                return "Tie Game! Your " + choice + " ties with " + computerChoice + " ."
            }
            break;
        case "scissors":
            if (choice == "scissors" && computerChoice == "paper"){
                return "You Win! Your " + choice + " beats " + computerChoice + "."
            } else if (choice == "scissors" && computerChoice == "rock"){
                return "You Lose! Your " + choice + " was beat by " + computerChoice + "."
            } else{
                return "Tie Game!"
            }
        case "paper":
            if (choice == "paper" && computerChoice == "rock"){
                return "You Win! Your " + choice + " beats " + computerChoice + "."
            } else if (choice == "paper" && computerChoice == "scissors"){
                return "You Lose! Your " + choice + " was beat by " + computerChoice + "."
            } else{
                return "Tie Game!"
            }

    }
}


function playGame(){
    
};
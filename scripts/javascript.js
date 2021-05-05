//randomly returns rock, paper, or scissors
function computerPlay(items){
    return items[Math.floor(Math.random()*items.length)];
}
let items = ["Rock", "Scissors", "Paper"];

//accepts playerSelection parameters, returning a number value and displays a string with the
//winner's info. Only plays one round
function gameTime(playerSelection, computerSelection){
    let lowerCase = playerSelection.toLowerCase();
    let playerSelection2 = playerSelection.charAt(0).toUpperCase() + lowerCase.slice(1);
    if (playerSelection2 == "Rock" && computerSelection == "Paper") {
        alert("You lose this round! Paper beats Rock, you sucker!");
        return -1;
    } else if (playerSelection2 == "Rock" && computerSelection == "Scissors") {
        alert("You win this round... Rock beats scissors. I'm gonna cry...");
        return 1;
    } else if (playerSelection2 == "Rock" && computerSelection == "Rock") {
        alert("We tie this round. Rock can't beat Rock. Better luck next time maybe?");
        return 0;
    } else if (playerSelection2 == "Paper" && computerSelection == "Paper") {
        alert("We tie this round. Paper can't beat Paper. Better luck next time maybe?");
        return 0;
    } else if (playerSelection2 == "Paper" && computerSelection == "Scissors") {
        alert("You lose this round! Scissors beat Paper, you sucker!");
        return -1;
    } else if (playerSelection2 == "Paper" && computerSelection == "Rock") {
        alert("You win this round... Paper beats Rock. I'm gonna cry...");
        return 1;
    } else if (playerSelection2 == "Scissors" && computerSelection == "Paper") {
        alert("You win this round... Scissors beats Paper. I'm gonna cry...");
        return 1;
    } else if (playerSelection2 == "Scissors" && computerSelection == "Scissors") {
        alert("We tie this round. Scissors can't beat Scissors. Better luck next time maybe?");
        return 0;
    } else if (playerSelection2 == "Scissors" && computerSelection == "Rock") {
        alert("You lose this round! Rock beats Scissors, you sucker!");
        return -1;
    } else {
        alert("Invalid. There was a misspelling. The overall winner will not be calculated.");
        return -50;
    }
}

//displays gameTime function result in the console
// console.log(gameTime(playerSelection, computerSelection));
function gameFiveTimes(){
    point1 = gameTime(window.prompt("Rock, paper, or scissors?"), computerPlay(items));
    point2 = gameTime(window.prompt("Rock, paper, or scissors?"), computerPlay(items));
    point3 = gameTime(window.prompt("Rock, paper, or scissors?"), computerPlay(items));
    point4 = gameTime(window.prompt("Rock, paper, or scissors?"), computerPlay(items));
    point5 = gameTime(window.prompt("Rock, paper, or scissors?"), computerPlay(items));
    return point1 + point2 + point3 + point4 + point5;
}

//displays a message dependant on the total amount of points user received
function whoIsTheWinner() {
    if (total > 0) {
        return "You win >:(";
    } else if (total == 0) {
        return "We tie... Try again?";
    } else if (total < 0 && total >= -5) {
        return "You LOSE! >:)";
    } else {
        return "invalid input received";
    }
}

//main body 
window.alert("This game plays five rounds. Best 3 out of 5 wins.");
let total = gameFiveTimes();
alert(whoIsTheWinner());
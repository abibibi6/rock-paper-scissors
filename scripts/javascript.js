function computerPlay(choices){
    return choices[Math.floor(Math.random()*choices.length)];
}

var threeChoices = ["Rock", "Paper", "Scissors"];

var userPoints = 0;
var computerPoints = 0;

var buttons = document.querySelectorAll(".button");

//event listener to take button clicks as player input for single round, then results are input into updateScore.

for (var i = 0; i < 3; i++) {
    buttons[i].addEventListener("click", function(){
            if (this.classList.contains("rock")){ 
                updateScore(singleRound("rock", computerPlay(threeChoices)));
                winningMessage();
                return;
            } else if (this.classList.contains("paper")){
                updateScore(singleRound("paper", computerPlay(threeChoices)));
                winningMessage();
                return;
            } else {
                updateScore(singleRound("scissors", computerPlay(threeChoices)));
                winningMessage();
                return;
            }
    });
}

//decides and alerts who wins the round. returns values to updateScore. Stops calculating after five points.
function singleRound (playerSelection, computerSelection){
    if (userPoints < 5 && computerPoints < 5) {
        document.getElementsByClassName("computer input")[0].innerHTML = "The computer chose: " + computerSelection;
            if (playerSelection == "rock" && computerSelection == "Paper") {
                //alert("You lose this round. Paper beats Rock.");
                return [0, 1]
            } else if (playerSelection == "rock" && computerSelection == "Scissors") {
                //alert("You win this round. Rock beats scissors.");
                return [1, 0];
            } else if (playerSelection == "rock" && computerSelection == "Rock") {
                //alert("We tie this round. Rock doesn't beat Rock.");
                return [0, 0];
            } else if (playerSelection == "paper" && computerSelection == "Paper") {
                //alert("We tie this round. Paper doesn't beat Paper.");
                return [0, 0];
            } else if (playerSelection == "paper" && computerSelection == "Scissors") {
                //alert("You lose this round. Scissors beat Paper.");
                return [0, 1];
            } else if (playerSelection == "paper" && computerSelection == "Rock") {
                //alert("You win this round. Paper beats Rock.");
                return [1, 0];
            } else if (playerSelection == "scissors" && computerSelection == "Paper") {
                //alert("You win this round. Scissors beats Paper.");
                return [1, 0];
            } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
                //alert("We tie this round. Scissors doesn't beat Scissors.");
                return [0, 0];
            } else if (playerSelection == "scissors" && computerSelection == "Rock") {
                //alert("You lose this round! Rock beats Scissors.");
                return [0, 1]
            }

}
}

//allows the output of singleRound be tallied on screen
function updateScore(arr){
    document.getElementsByClassName("player results")[0].innerHTML = "Player Count = " + (userPoints += arr[0]);
    document.getElementsByClassName("computer results")[0].innerHTML = "Computer Count = " + (computerPoints += arr[1]);
}

//displays who the winner is after five points
function winningMessage(){
    var displayWinner = document.getElementsByClassName("winning message")[0].innerHTML;
    if (userPoints > computerPoints){
        displayWinner.innerHTML = "You win!"
        return;
    } else if (computerPoints > userPoints){
        displayWinner.innerHTML = "You lose!"
        return;
    } else {
        return;
    }
}
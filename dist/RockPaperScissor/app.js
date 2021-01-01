let userScore = 0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBorder_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function conertToWord(letter){
    if (letter === "rock") return "Rock";
    if (letter === "paper") return " Paper";
    return "Scissors"
}
// console.log(getComputerChoice());

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML = `${conertToWord(userChoice)}  beats ${conertToWord(computerChoice)} You Win :)`;
    
}
function loose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML = `${conertToWord(computerChoice)}  beats ${conertToWord(userChoice)} You Lose :(`;
}
function draw(userChoice, computerChoice){
    console.log("draw");
    result_p.innerHTML = `${conertToWord(userChoice)}  draws ${conertToWord(computerChoice)} Issa Draw!`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    // console.log("user choice =>" + userChoice);
    // console.log("computer choice =>" + computerChoice);
    switch(userChoice+computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;
        case "scissorrock":
        case "rockpaper":
        case "paperscissor":
            loose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;
        
    }
}

function main(){

    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissor_div.addEventListener('click', function() {
        game("scissor");
})
}
main();
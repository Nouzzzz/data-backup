let main = document.getElementById("main")
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let userchoice;
let randomChoice;
let choices = ["rock", "paper", "scissor"];

function getcomputerchoice(){
    let randomout = Math.floor(Math.random() * choices.length);

    let randomChoice = choices[randomout];
    return randomChoice
}


function play() {
    let message = "";

    if (randomChoice === userchoice) {
        message = "It's a Tie!";
    } else if (
        (userchoice === "rock" && randomChoice === "scissor") ||
        (userchoice === "paper" && randomChoice === "rock") ||
        (userchoice === "scissor" && randomChoice === "paper")
    ) {
        message = "You Won!";
    } else {
        message = "Computer Won!";
    }

    main.innerHTML = `
        <h2>Your Choice: ${userchoice}</h2>
        <h2>Computer Choice: ${randomChoice}</h2>
        <h1>${message}</h1>
    `;
}

rock.addEventListener('click', () => {
    randomChoice = getcomputerchoice()
    userchoice = "rock"
    play()
});

paper.addEventListener('click', () => {
    randomChoice = getcomputerchoice()
    userchoice = "paper"
    play()
});

scissor.addEventListener('click', () => {
    randomChoice = getcomputerchoice()
    userchoice = "scissor"
    play()
});









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


function play(){
    if(randomChoice == userchoice){
    console.log("It is a tie")
}
else if(randomChoice == 'rock' && userchoice == 'paper'){
    console.log("computer chose rock. You won")
}else if(randomChoice == 'scissor' && userchoice == 'rock'){
    console.log("computer chose scissor . you won")
}else if(randomChoice == 'paper' && userchoice == 'scissor'){
    console.log('computer chose paper. you win')
} 
else{
    console.log(`Computer chose ${randomChoice}. computer won`)
}

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









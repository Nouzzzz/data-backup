let isRunning = true;

while (isRunning) {

let userinput = Math.floor(Math.random() * 10);
console.log(userinput); 

for (let i = 0; i < 3; i++) {
    let guess = Number(prompt("Guess the number"));

    if (userinput == guess) {
        alert("Guess is correct");
        break; 
    } else {
        
        if (i < 2) {
            alert("Wrong guess, Try again");
        } else {
            alert("Game over, The correct number was " + userinput);
        }
    }
}

let playAgain = prompt("Do you want to play again? (y/n)");

    if (playAgain == "n") {
        isRunning = false;
        alert("Thanks for playing!");
}
}




// function display(){
//     console.log("hello")
// }


// setTimeout(() => {
//     display()
// },4000)




// let interval = setInterval(() => {
//     display()
// },1000)


// clearInterval(interval)


// let num = 0

// const timer = setInterval(() 
// => {
//     console.log(num)
//     num++
// },1000)


// function display () {
//     console.log("hello")
// }

// display();


// let interval = setInterval(() => {
//     display()
// },1)


// clearInterval(interval)

// setTimeout(() => {
//    display() 
// }, 1000);



// function sum(a,b,callback){
//     console.log(a+b)
//     callback()
// }


// function greet(){
//     console.log("Thanks")
// }


// sum(4,5,greet)


// function greetings(username){
//     alert('Welcome ' + username);
// }

// function saveUserName (callback){
//     var name = prompt('please enter your name');
//     callback(name); 
// }

// saveUserName(greetings);

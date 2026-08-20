let quiz = [

    {
        que: "National bird of India",
        options: ["Hen", "Peacock", "Ostrich"],
        answer: "peacock"
    },

    {
        que: "National animal of india",
        options: ["Lion", "Rhino", "Tiger"],
        answer: "tiger"
    },

    {
        que: "National flower of india",
        options: ["Lotus", "Rose", "Lilly"],
        answer: "lotus"
    },

    {
        que: "Year of indian independence",
        options: ["1956", "1963", "1947"],
        answer: "1947"
    }

]

let isrunning = true;

let score = 0;

while (isrunning) {


    for (let i = 0; i < quiz.length; i++) {


        let temp = ""

        for (let j = 0; j < quiz[i].options.length; j++) {
            temp += `\n${j + 1}. ${quiz[i].options[j]}`

        }

        let choice = prompt(`${quiz[i].que} \n ${temp}`)
        if (choice == quiz[i].answer) {
            alert("Your answer is correct")
            score++
        }
        else {
            alert(`Your answer is wrong\nCorrect answer was ${quiz[i].answer}`)
        }
    }

    let exit = prompt("Press Y to exit")

    if (exit == 'y' || exit == 'Y') {
        alert(`Exited successfully.\nYour score is ${score} `)
        score = 0;
        isrunning = false;
    }


}


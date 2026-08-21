
let box = document.getElementById("box");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let playagainbtn = document.getElementById("playagain");

let index = 0;
let score = 0;

let answered = [];

let quiz = [
    {
        questions: "What company makes the Xperia model of smartphone?",
        options: [
            "Samsung", "Nokia", "Sony"
        ],
        answer: "Sony",
    },

    {
        questions: "Which of the following languages has the longest alphabet?",
        options: [
            "Greek", "Arabic", "Russian"
        ],
        answer: "Russian",
    },

    {
        questions: "Where was the first example of paper money used?",
        options: [
            "China", "India", "Turkey"
        ],
        answer: "China",
    },

    {
        questions: "Who is generally considered the inventor of the motor car",
        options: [
            "Henry ford", "Karl Benz", "Henry M Leleand"
        ],
        answer: "Karl Benz",
    },

    {
        questions: "Which horoscope sign is a fish?",
        options: [
            "Pisces", "Aquaris", "Cancer"
        ],
        answer: "Pisces",
    },
];


function display() {
    box.innerHTML = `<h3>${quiz[index].questions}</h3>`;

    quiz[index].options.forEach((x) => {
        let p = document.createElement("p");
        p.textContent = x;
        if (answered[index] !== undefined) {
            if (x === answered[index]) {
                if (x === quiz[index].answer) {
                    p.style.backgroundColor = "lightgreen";
                } else {
                    p.style.backgroundColor = "red";
                }
            }
        }

        p.addEventListener("click", () => {

            if (answered[index] !== undefined) {
                return;
            }

            answered[index] = x;

            if (x === quiz[index].answer) {
                p.style.backgroundColor = "lightgreen";
                score++;
                console.log("Score:", score);
            } else {
                p.style.backgroundColor = "red";
            }
        });

        box.appendChild(p);
    });
}

function playagain() {
    index = 0;
    score = 0;
    answered = [];

    display();
}

function previousof() {
    if (index === 0) {
        alert("You are at the first question, cannot go back further.");
        return;
    }

    index--;
    display();
}

function nextof() {
    if (index === quiz.length - 1) {
        box.innerHTML = `
            <h3>Quiz completed, Your final score is ${score}</h3>
        `;
        return;
    }

    index++;
    display();
}

display();


prev.addEventListener("click", () => {
    previousof();
});


next.addEventListener("click", () => {
    if (index === quiz.length - 1) {
        box.innerHTML = `
            <h3>Quiz completed, Your final score is ${score}</h3>
        `;
        return;
    }

    nextof();
});


playagainbtn.addEventListener("click", () => {
    if (
        confirm(
            "Are you sure you want to play again?"
        )
    ) {
        playagain();
    }
});

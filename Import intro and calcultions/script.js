import multiply, { sum as add, sub} from "./math.js";

let btn = document.getElementById("btn");
let fval = document.getElementById("fval");
let sval = document.getElementById("sval");
let op = document.getElementById("op");
let gallery = document.getElementById("gallery");

btn.addEventListener('click', () => {
    solveop();
});

function solveop() {
    let num1 = Number(fval.value);
    let num2 = Number(sval.value);
    let operation = op.value;
    let result = 0;

    if (operation === "Add") {
        result = add(num1, num2);
    } else if (operation === "Subtract") {
        result = sub(num1, num2);
    } else if (operation === "Multiply") {
        result = multiply(num1, num2);
    } else if (operation === "Divition") {
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    }

    gallery.innerText = "Result: " + result;
}

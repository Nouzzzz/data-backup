let content = document.getElementById("content")
let checkbtn = document.getElementById("checkbtn")
let result = document.getElementById("result")
let age = document.getElementById("age")
let height = document.getElementById("height")
let weight = document.getElementById("weight")
let datavalues = []
let bmi = 0;
let message = ""

form.addEventListener("submit", (e) => {
    e.preventDefault();
    calculate()
    evaluate()
    display()
})


function display () {
    result.innerHTML = `
    
    <h2>Result</h2><br>
    <h3>Bmi value: ${bmi} </h3>
    <h3>Condition : ${message} </h3>
    
    `
}

function calculate () {
    let datavalues = {
        // age: age.value,
        height: height.value,
        weight: weight.value
    }
}



function evaluate () {

bmi = weight.value/(height.value*height.value)*10000

// console.log(weight.value)
// console.log(height.value)
// console.log(bmi)

    if (bmi < 18.5 )
        message= "Underweight"
    else if (bmi < 25 && bmi >=18.5)
        message= "Normal"
    else if (bmi > 25)
        message= "Overweight"

    // if (bmi < 16 )
    //      message= "Underweight"
    // else if (bmi <=17 && bmi >= 16)
    //     message= "Moderate thiness"
    //  else if (bmi <=18.5 && bmi >= 17)
    //     message = "Mild thiness"
    //  else if (bmi <=25 && bmi >= 18.5)
    //     message = "Normal"
    //   else if (bmi <=30 && bmi >= 25)
    //     message = "Overweight"
    // else if (bmi <= 35 && bmi >= 30)
    //     message = "obese class 1"
    // else if (bmi <= 40 && bmi >= 35)
    //     message = "obese class 2"
    // else if (bmi >= 30)
    //     message = "obese class 3"
}

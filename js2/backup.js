let char = "abcdefghijklmnopqrstuvwxyz"
let num = "0123456789"
let specialchar = "!@#$%^&*()~_"





let Numofchar = Number(prompt("Enter how many characters need for password?"))
let Numofnum = Number(prompt("Enter how many numbers need for password?"))
let Numofspecialchar = Number(prompt("Enter how many special characters need for password?"))

let password = ""

for (let i = 0; i < Numofchar; i++) {
    let randomchar = Math.floor(Math.random() * char.length)
    password = password + char[randomchar]
}

for (let j = 0; j < Numofnum; j++) {
    let randomnum = Math.floor(Math.random() * num.length)
    password = password + num[randomnum]
}

for (let k = 0; k < Numofspecialchar; k++) {
    let randomspecialchar = Math.floor(Math.random() * specialchar.length)
    password = password + specialchar[randomspecialchar]
}



alert(password) 
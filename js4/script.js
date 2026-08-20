let inputcolor = document.getElementById("colorinput")
let btn = document.getElementById("btn")


let box = document.querySelector(".box")

let colors = ["Orange", "yellow", "Green", "Blue", "Red", "violet", "wheat", "black", "brown", "indigo"]


btn.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
})




















//Spread operator  

// let a = [1, 2, 3, 4]

// let b = [...a]

// console.log(b)

// let det = {
//     name: "Isa",
//     age: 21
// }

// let ails = {
//     place: "kollam"
// }

// let details = { ...det, ...ails }

// console.log(details)



//http://192.168.0.110:8096/web/#/login

// console.log("hello")

// console.log("hello world")

// let a = [1,2,3,4,5]

// let c = a.slice (2,5)

// console.log(c)

// let d = a.forEach(() => {
//     console.log("hii")
// }) 



// const num = [1,2,3,4,6]

// // for (x in num){
// //     console.log(x)
// // }

// for (x of num){
//     console.log(x)
// }



// let a = [2,3,4,5,6,7,8]

// let c = a.map ((i) => {
//     return i*2;
// })

// console.log(c)

// let d = a.filter ((i) => {
//     return i%2 == 0
// })

// console.log(d)

// let e = [2,4,6,8]

// let f = e.reduce ((a,b) => {
//        return a+b/e.length;
// },0)


// console.log(f)


// Deconstuction 

// let a = [3,4,5]

// let [x,y,z] = a;

// console.log(z)

// let name = ["naz","john"]

// let [_,d] = name;

// console.log(d)

// let person = {
//     name: "pavi",
//     age: 21
// }

// let {age} = person

// console.log(age) 



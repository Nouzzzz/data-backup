console.log("hello")

// callback function 

// function add (a,back) {
//     console.log(a)
//     back()
// }

// function display () {
//     for (let i=0;i<8;i++){
//           console.log("testing...")
//     }
// }

// add (10,display)

// Higher order funtion 

// c, Reduce

// MAP  
// let a = [1, 2, 3, 5]

// let c = a.map ((i) => {

//     return i * 3

// })

// console.log(c)

// b, Filter 
let a = [1,2,3,4,8,16,24,32]

let c = a.filter ((x) => {
    return x % 2 == 0;
})

console.log(c)

// c, reduce
let d = [12,12,12,36]

let e = d.reduce ((a,b) => {
       return a+b;
},0)

console.log(e)
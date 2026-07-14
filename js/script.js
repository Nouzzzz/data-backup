// console.log("hello")

// for(let i=0;i<=8;i++){
//     console.log(i)
// }


// let total = 0;

// for (let i = 12; i <= 3; i++) {
//     let sum = Number(prompt("Enter value")); 
    
//     total = total + sum; 
// }

// console.log(total);

// total = total + 3.212
// console.log(total)
// console.log(Math.floor(total))
// total = total + 3.212
// console.log(total)
// console.log(Math.ceil(total))

// while (isrun == true){
//   let total = 0;

// for (let i = 0; i <= 3; i++) {
//     let sum = Number(prompt("Enter value")); 
    
//     total = total + sum; 
// }

// if(isrun == false){
//      exit code
// }

// }

let isrun = true;
let total = 0;

while (isrun === true) {
    
    for (let i = 0; i < 3; i++) {
        let input = prompt("Enter values"); 
        
        if (input === null) {
            isrun = false;
            break; 
        }
        
        let sum = Number(input);
        total = total + sum; 
    }
    
  
    if (isrun === false) {
        break;
    }
    
    console.log("Current Grand Total: " + total);
    
    
    isrun = confirm("Do you want to enter 3 more numbers?");
}

console.log("Final Total: " + total);

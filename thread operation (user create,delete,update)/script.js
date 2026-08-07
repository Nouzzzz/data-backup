// let contenta = document.getElementById('contenta')
// let contentb = document.getElementById('contentb')
// let addbtn = document.getElementById('addbtn')


// addbtn.addEventListener('click', () => {
//     console.log("clicked add")
// })


// // contentb.innerHTML = `
// // <h3>HELLO </H3>
// // `

// console.log("hello")

let isrunning = true;

while(isrunning == true) {

let users = [""]

let userchoice = prompt("Choose Operation \n1. Add user \n2. Delete user \n3. Search user \n4. Show user \n5. Update user \n6. Exit \n")

switch(userchoice){
    case "1" : {
        adduser()
        break;
    }

    case "2" : {
          deleteuser()
          break;
    }

    case "3" : {
        searchuser()
        break;
    }

    case "4" : {
           showuser()
           break;
    }

    case "5" : {
           updateuser()
           break;
    }

    case "6" : {
        isrunning = false;
        break;
    }
}

function adduser () {

let name = prompt("Enter your name")

if (name == ""){
    alert("Name should not be empty")
} else {
    alert("Name added successfully")
    console.log(name)
}




}

function deleteuser () {

let deluser = prompt("Enter the name to delete")



}

function searchuser () {

let query = prompt("Enter the user to be search")    


}

function showuser () {

alert(users)

}

function updateuser () {



}


}
let isrunning = true;
let users = [];


while (isrunning == true) {

    let userchoice = prompt(
        "Choose Operation\n" +
        "1. Add user\n" +
        "2. Delete user\n" +
        "3. Search user\n" +
        "4. Show user\n" +
        "5. Update user\n" +
        "6. Exit"
    );

    switch (userchoice) {

        case "1":
            adduser();
            break;

        case "2":
            deleteuser();
            break;

        case "3":
            searchuser();
            break;

        case "4":
            showuser();
            break;

        case "5":
            updateuser();
            break;

        case "6":
            isrunning = false;
            alert("Program exited");
            break;

        default:
            alert("Invalid choice");
    }
}


function adduser() {

    let name = prompt("Enter your name");
    let contact = prompt("Enter contact")
    let place = prompt("Enter place")

    if (name == "" || contact =="" || place == "") {
        alert("Details should not be empty");
    } 
    else if (name == null || contact == null || place == null) {
        return;
    }
    else {
        users.push(name);
        users.push(contact);
        users.push(place);
        alert("Details added successfully");

        console.log(users);
    }
}


function deleteuser() {

    let deluser = prompt("Enter the name to delete");

    let index = users.indexOf(deluser);

    if (index == -1) {
        alert("User not found");
    } 
    else {
        users.splice(index, 1);
        alert("User deleted successfully");

        console.log(users);
    }
}


function searchuser() {

    let query = prompt("Enter the user to search");

    let index = users.indexOf(query);

    if (index == -1) {
        alert("User not found");
    } 
    else {
        alert("User found: " + users[index]);
    }
}


function showuser() {

    if (users.length == 0) {
        alert("No users available");
    } 
    else {
         alert("Users:\n" + users.join("\n"));5


    }
}


function updateuser() {

    let oldname = prompt("Enter the user name to update");

    let index = users.indexOf(oldname);

    if (index == -1) {
        alert("User not found");
    } 
    else {

        let newname = prompt("Enter the new name");
        let newcontact = prompt("Enter the new contact details")
        let newplace = prompt("Enter the new place")

        if (newname == "" || newname == null || newcontact == "" || newcontact == null || newplace == "" || newplace == null) {
            alert("Details should not be empty");
        } 
        else {
            users[index] = newname;

            alert("User updated successfully");

            console.log(users);
        }
    }
}










// Training

// let getvalue =  () => {
//      return 5;
// }

// let getvalue1 = () => console.log("hello world"); console.log("hii"); console.log("h"); console.log("test")

// getvalue()
// getvalue1() 

// callback function

// function sum (a,b, test){
//     console.log(a+b)
//     test()
// }

// const check = () => {
//     console.log("work done")
// }

// sum (3,4, check)


// function greet () {
//     console.log("hello")
// }

// setInterval(greet,3000)

// let i = 10;



// const display = () => {

//     if(i<0){
//         clearInterval(display)
//         return
//     }
//      console.log(i)
//      i--
// }



// setInterval(display,200)

// let mob = {
//     name: "redmi",
//     storage: "128gb",
//     ram: "8gb"
// }

// console.log(mob.storage)
// console.log(mob)

// mob.storage = "256gb"
// console.log(mob)

// let x = 12;
// let y = x;
// x= 10;
// console.log(x)
// console.log(y)

// let a = {
//     ram : 12
// }

// let b=a;

// b.ram = 20

// console.log(a)


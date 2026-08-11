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

    if (name == "") {
        alert("Name should not be empty");
    } 
    else if (name == null) {
        return;
    }
    else {
        users.push(name);
        alert("Name added successfully");

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
        alert("Users:\n" + users.join("\n"));
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

        if (newname == "" || newname == null) {
            alert("New name should not be empty");
        } 
        else {
            users[index] = newname;

            alert("User updated successfully");

            console.log(users);
        }
    }
}
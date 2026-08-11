let users = [];

let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let placeInput = document.getElementById("place");

let addbtn = document.getElementById("addbtn");
let contentb = document.getElementById("contentb");


addbtn.addEventListener("click", function () {

    let name = nameInput.value;
    let age = ageInput.value;
    let place = placeInput.value;


    if (name == "" || age == "" || place == "") {

        alert("Please fill all fields");

        return;
    }


    let user = {
        name: name,
        age: age,
        place: place
    };


    users.push(user);


    nameInput.value = "";
    ageInput.value = "";
    placeInput.value = "";


    showUsers();

});


function showUsers() {

    contentb.innerHTML = "";


    users.forEach(function (user, index) {

        let div = document.createElement("div");

        div.className = "user";


        div.innerHTML = `
            <div>
                <strong>${user.name}</strong>
                <br>
                Age: ${user.age}
                <br>
                Place: ${user.place}
            </div>

            <div class="actions">
                <button onclick="updateUser(${index})">
                    Edit
                </button>

                <button onclick="deleteUser(${index})">
                    Delete
                </button>
            </div>
        `;


        contentb.appendChild(div);

    });

}


function deleteUser(index) {

    users.splice(index, 1);

    showUsers();

}


function updateUser(index) {

    let newName = prompt("Enter new name");

    if (newName == "" || newName == null) {
        return;
    }

    users[index].name = newName;

    showUsers();

}
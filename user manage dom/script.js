let addbtn = document.getElementById("addbtn")
let form = document.getElementById("form")
let gallery = document.getElementById("gallery")
let username = document.getElementById("username")
let email = document.getElementById("email")
let phno = document.getElementById("phno")
let user = JSON.parse(localStorage.getItem('user')) || []
let search = document.getElementById("search")
let filteruser = [...user]
let setedit = null;

function addnewuser() {

    if (setedit !== null) {
        let userUpdate = user.find((user) => user.id === setedit)
        if (userUpdate) {
            userUpdate.username = username.value
            userUpdate.email = email.value
            userUpdate.phone = phno.value
        }
        setedit = null;
        addbtn.innerText = "Add User"
    } else {
        let newuser = {
            id: user.length + 1,
            username: username.value,
            email: email.value,
            phone: phno.value
        }
        user.push(newuser)
    }


    if (!username.value || !email.value || !phno.value) {
        alert("Please fill all the fields")
        return
    }

    displayuser()
    updatestorage();
    clearfields()


}

function updatestorage() {
    localStorage.setItem('user', JSON.stringify(user))
}


function clearfields() {
    username.value = ""
    email.value = ""
    phno.value = ""
}


function updateuser(id) {
    let userUpdate = user.find((user) => user.id === id)
    if (!userUpdate) return

    username.value = userUpdate.username
    email.value = userUpdate.email
    phno.value = userUpdate.phone

    setedit = id;
    addbtn.innerText = "Update user"

    updatestorage();

}


function displayuser() {

    gallery.innerHTML = ""
    filteruser.forEach((user) => {

        gallery.innerHTML += `
       
        <div id="content">
        <h3>Name: ${user.username}</h3>
        <p>Email: ${user.email}</p>
        <p>Phone No: ${user.phone}</p>
        <button id="updatebtn" onclick="updateuser(${user.id})">Edit</button>
        <button id="deletebtn" onclick="deleteuser(${user.id})">Delete</button>
     
        </div>
      `
    })

}

function searchuser() {
    let searchvalue = search.value.toLowerCase()
    
    filteruser = user.filter((user) => {
        return user.username.toLowerCase().includes(searchvalue) || user.email.toLowerCase().includes(searchvalue) || user.phone.toLowerCase().includes(searchvalue)
    })
    
}


function deleteuser(id) {
    let confirmdelete = confirm("Are you sure you want to delete this user?")
    if (!confirmdelete) {
        return
    }
    user = user.filter((user) => user.id !== id)
    displayuser()
    updatestorage();
}

displayuser()

search.addEventListener('input', () => {
    searchuser()
   displayuser()
})

addbtn.addEventListener('click', () => {
    addnewuser()
    clearfields()

})  
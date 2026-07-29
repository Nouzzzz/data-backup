let name = document.getElementById("name")
let uid = document.getElementById("uid")
let position = document.getElementById("position")
let salary = document.getElementById("salary")
let btn = document.getElementById("btn")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let itemcontainer = document.getElementById("itemcontainer")
let employees = []
let empindex;
let editmode = false


function addEmployee() {
    let employee = {
        name: name.value,
        uid: uid.value,
        position: position.value,
        salary: salary.value
    }

    employees.push(employee)
}


function clearfields() {
    name.value = ""
    uid.value = ""
    position.value = ""
    salary.value = ""
}


function display() {

    table.innerHTML = `
        <tr>
                <th>Name</th>
                <th>Unique id</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Actions</th>
            </tr>
    `

    for (let i = 0; i < employees.length; i++) {
        table.innerHTML += `
           <tr>
           <td>
                <p>${employees[i].name}</p> </td>
              <td>  <p>${employees[i].uid}</p></td>
                <td><p>${employees[i].position}</p></td>
                 <td><p>${employees[i].salary}</p> </td>
                 <td>    <button id="btn1" onclick="setEdit(${i})">Edit</button>
                         <button id="btn2">Delete</button> </td>
                 </tr>


        `
    }

}


function setEdit(index) {
    empindex = index
    editmode = !editmode
    name.value = employees[empindex].name
    uid.value = employees[empindex].uid
    position.value = employees[empindex].position
    salary.value = employees[empindex].salary

}


btn.addEventListener('click', () => {
    addEmployee()
    clearfields()
    display()
})







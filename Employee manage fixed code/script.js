let name = document.getElementById("name")
let uid = document.getElementById("uid")
let position = document.getElementById("position")
let salary = document.getElementById("salary")

let btn = document.getElementById("btn")          // Add button
let updateBtn = document.getElementById("updateBtn") // Update button

let table = document.getElementById("table")

let employees = []
let empindex = -1

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
            <td>${employees[i].name}</td>
            <td>${employees[i].uid}</td>
            <td>${employees[i].position}</td>
            <td>${employees[i].salary}</td>
            <td>
                <button class="btn1" onclick="setEdit(${i})">Edit</button>
                <button class="btn2" onclick="deleteEmployee(${i})">Delete</button>
            </td>
        </tr>
        `
    }

}

// Load employee into form
function setEdit(index) {

    empindex = index

    name.value = employees[index].name
    uid.value = employees[index].uid
    position.value = employees[index].position
    salary.value = employees[index].salary

    // Hide Add button
    btn.style.display = "none"

    // Show Update button
    updateBtn.style.display = "inline-block"
}

// Update employee
function updateEmployee() {

    employees[empindex] = {
        name: name.value,
        uid: uid.value,
        position: position.value,
        salary: salary.value
    }

    display()
    clearfields()

    // Show Add button again
    btn.style.display = "inline-block"

    // Hide Update button
    updateBtn.style.display = "none"

    empindex = -1
}

// Delete employee
function deleteEmployee(index) {

    employees.splice(index, 1)

    display()
}

// Add button
btn.addEventListener("click", () => {

    addEmployee()
    clearfields()
    display()
})

// Update button
updateBtn.addEventListener("click", () => {

    updateEmployee()

})
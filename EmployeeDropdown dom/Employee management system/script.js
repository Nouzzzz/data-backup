let name = document.getElementById("name")
let uid = document.getElementById("uid")
let department = document.getElementById("department")
let salary = document.getElementById("salary")
let btn = document.getElementById("btn")
let updateBtn = document.getElementById("updateBtn")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let itemcontainer = document.getElementById("itemcontainer")
let employees = JSON.parse(localStorage.getItem('employees')) || []
let empindex = -1


function updatestorage () {
    localStorage.setItem('employees',JSON.stringify(employees))
}


function addEmployee() {
    let employee = {
        name: name.value,
        uid: uid.value,
        department: department.value,
        salary: salary.value
    }

    employees.push(employee)
    updatestorage()
}


function clearfields() {
    name.value = ""
    uid.value = ""
    department.value = ""
    salary.value = ""
}


display()

function searchemployees() {

    let searchvalue = search.value.toLowerCase()

    filteremployees = employees.filter((employees) => {
        return employees.name.toLowerCase().includes(searchvalue) ||
            employees.uid.toLowerCase().includes(searchvalue) ||
            employees.department.toLowerCase().includes(searchvalue) ||
            employees.salary.toLowerCase().includes(searchvalue)
    })
}

search.addEventListener('input', () => {

    searchemployees()
    display()

})

function display() {

    table.innerHTML = `
        <tr>
                <th>Name</th>
                <th>Unique id</th>
                <th>Department</th>
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
                <td><p>${employees[i].department}</p></td>
                 <td><p>${employees[i].salary}</p> </td>
                 <td>    <button id="btn1" onclick="setEdit(${i})">Edit</button>
                         <button id="btn2" onclick="deleteEmployee(${i})">Delete</button> 
                 </tr>


        `
    }

}

function setEdit(index) {

    empindex = index

    name.value = employees[index].name
    uid.value = employees[index].uid
    department.value = employees[index].department
    salary.value = employees[index].salary

    btn.style.display = "none"

   
    updateBtn.style.display = "inline-block"
}


function updateEmployee() {

    employees[empindex] = {
        name: name.value,
        uid: uid.value,
        department: department.value,
        salary: salary.value
    }

    updatestorage()
    display()
    clearfields()

    btn.style.display = "inline-block"

    updateBtn.style.display = "none"

    empindex = -1
}

function deleteEmployee(index) {
    
    employees.splice(index, 1) 

    updatestorage()
    display()
     searchuser()
    clearfields()

    btn.style.display = "inline-block"
    updateBtn.style.display = "none"
    empindex = -1
}


btn.addEventListener('click', () => {
    addEmployee()
    clearfields()
    display()
})


updateBtn.addEventListener('click', () => {
      updateEmployee()
})

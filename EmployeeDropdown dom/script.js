let addbtn = document.getElementById("addbtn");
let department = document.getElementById("department");
let gallery = document.getElementById("gallery"); 
let ename = document.getElementById("ename");
let uid = document.getElementById("uid");
let salary = document.getElementById("salary");
let search = document.getElementById("search");
let table = document.getElementById("table");
let employee = JSON.parse(localStorage.getItem('employee')) || [];
let filteremployee = [...employee];
let setedit = null;
let edit = null;

function addnewuser() {
    if (!ename.value || !uid.value || !department.value || !salary.value) {
        alert("Please fill all the fields");
        return;
    }

    if (setedit !== null) {
    
        let empUpdate = employee.find((emp) => emp.id === setedit);

        if (empUpdate) {
            empUpdate.ename = ename.value;
            empUpdate.uid = uid.value;
            empUpdate.department = department.value;
            empUpdate.salary = salary.value;
        }

        setedit = null;
        addbtn.innerText = "Add Employee";

        if (edit) {
            edit.innerText = "Edit";
            edit = null;
        }
    } else {
    
        let newemployee = {
            id: Date.now(), 
            ename: ename.value,
            uid: uid.value,
            department: department.value,
            salary: salary.value
        };

        employee.push(newemployee);
    }

    syncFilteredList(); 
    displayuser();
    updatestorage();
    clearfields();
}

function updatestorage() {
    localStorage.setItem('employee', JSON.stringify(employee));
}

function clearfields() {
    ename.value = "";
    uid.value = "";
    department.value = "";
    salary.value = "";
}

function updateuser(id, button) {
    if (setedit === id) {
        setedit = null;
        clearfields();
        addbtn.innerText = "Add Employee";
        button.innerText = "Edit";
        edit = null;
        return;
    }

    if (edit) {
        edit.innerText = "Edit";
    }

    let empUpdate = employee.find((emp) => emp.id === id);

    if (!empUpdate) return;

    ename.value = empUpdate.ename;
    uid.value = empUpdate.uid;
    department.value = empUpdate.department;
    salary.value = empUpdate.salary;

    setedit = id;
    edit = button;
    button.innerText = "Cancel";
    addbtn.innerText = "Update employee";
}

function displayuser() {
    if (!table) return;

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Unique id</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
        </tr>
    `;

    for (let i = 0; i < filteremployee.length; i++) {
        let currentEmp = filteremployee[i];
        table.innerHTML += `
            <tr>
                <td><p>${currentEmp.ename}</p></td>
                <td><p>${currentEmp.uid}</p></td>
                <td><p>${currentEmp.department}</p></td>
                <td><p>${currentEmp.salary}</p></td>
                <td>   
                    <button class="updatebtn" onclick="updateuser(${currentEmp.id}, this)">Edit</button>
                    <button class="deletebtn" onclick="deleteuser(${currentEmp.id})">Delete</button>
                </td>
            </tr>
        `;
    }
}

function searchuser() {
    let searchvalue = search.value.toLowerCase();

    filteremployee = employee.filter((emp) => {
        return emp.ename.toLowerCase().includes(searchvalue) ||
            emp.uid.toLowerCase().includes(searchvalue) ||
            emp.department.toLowerCase().includes(searchvalue) ||
            emp.salary.toString().toLowerCase().includes(searchvalue);
    });
}

function syncFilteredList() {
    if (search.value === "") {
        filteremployee = [...employee];
    } else {
        searchuser();
    }
}

function deleteuser(id) {
    let confirmdelete = confirm("Are you sure you want to delete this user?");

    if (!confirmdelete) return;

    if (setedit === id) {
        setedit = null;
        edit = null;
        addbtn.innerText = "Add Employee";
        clearfields();
    }

    employee = employee.filter((emp) => emp.id !== id);

    syncFilteredList();
    displayuser();
    updatestorage();
}

search.addEventListener('input', () => {
    searchuser();
    displayuser();
});

addbtn.addEventListener('click', () => {
    addnewuser();
});

syncFilteredList();
displayuser();

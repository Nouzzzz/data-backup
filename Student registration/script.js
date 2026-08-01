let name = document.getElementById("name")
let age = document.getElementById("age")
let rollno = document.getElementById("rollno")
let form = document.getElementById("form")
let main = document.getElementById("main")

let students = []
let stindex = -1;


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (stindex === -1) {
        students.push({
            name: name.value,
            age: age.value,
            rollno: rollno.value
        });
    } else {
        updateStudent();
    }

    display();
    clearfields();
});


function display() {
    main.innerHTML = ""
    students.forEach((s, index) => {
        main.innerHTML += `
            <div class="card"> 
                <h2>Student details </h2><br>
                <h3>Name: ${s.name}</h3>
                <h3>Age: ${s.age}</h3>
                <h3>Rollno: ${s.rollno}</h3><br>
                <button class="editbtn" data-index="${index}" style=" background-color: blue;
    color: white;
    border-radius: 18px;
    padding: 2px 8px;
    margin: 2px;">Edit</button>
                <button class="deletebtn" data-index="${index}" style="background-color: red;
    color: white;
    border-radius: 18px;
    padding: 2px 8px;
    margin: 2px;">Delete</button>
            </div>
         `
    })
}

main.addEventListener('click', (e) => {
    let index = parseInt(e.target.getAttribute('data-index'))

    if (e.target.classList.contains('editbtn')) {
        setEdit(index)
    }
    else if (e.target.classList.contains('deletebtn')) {
        deleteStudent(index)
    }
})

function deleteStudent(index) {
    students.splice(index, 1)
    display()
    clearfields()

    if (addbtn) addbtn.style.display = "inline-block"
    if (updateBtn) updateBtn.style.display = "none"
    stindex = -1
}

function clearfields() {
    name.value = ""
    age.value = ""
    rollno.value = ""
}

function updateStudent() {
    students[stindex] = {
        name: name.value,
        age: age.value,
        rollno: rollno.value
    }

    if (addbtn) addbtn.style.display = "inline-block"
    if (updateBtn) updateBtn.style.display = "none"
    stindex = -1
}

function setEdit(index) {
    stindex = index

    name.value = students[index].name
    age.value = students[index].age
    rollno.value = students[index].rollno

    if (addbtn) addbtn.style.display = "none"
    if (updateBtn) updateBtn.style.display = "inline-block"
}


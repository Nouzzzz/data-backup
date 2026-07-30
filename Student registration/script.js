let name = document.getElementById("name")
let division = document.getElementById("division")
let rollno = document.getElementById("rollno")
let btn = document.getElementById("btn")
let updateBtn = document.getElementById("updateBtn")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let editbtn = document.getElementById("editbtn")
let deletebtn = document.getElementById("deletebtn")
let content = document.getElementById("content")
let students = []
let stindex = -1

function addStudent () {
    let student = {
        name: name.value,
        division = division.value,
        rollno = rollno.value
    }

    students.push(student)
}

function clearfields() {
    name.value = ""
    division.value = ""
    rollno.value = ""
}

function setEdit(index) {

    stindex = index

    name.value = students[index].name
    division.value = students[index].division
    rollno.value = students[index].rollno
    

    btn.style.display = "none"

   
    updateBtn.style.display = "inline-block"
}


function updateStudent() {

    students[stindex] = {
        name: name.value,
        division: division.value,
        rollno: rollno.value
    }

    // updatestorage()
    display()
    clearfields()

    btn.style.display = "inline-block"

    updateBtn.style.display = "none"

    stindex = -1
}

function deleteStudent(index) {
    
    students.splice(index, 1) 

    // updatestorage()
    display()
    clearfields()

    btn.style.display = "inline-block"
    updateBtn.style.display = "none"
    stindex = -1
}

function display () {
    for (let i =0;i<students.lentgth;i++){
        content.innerHTML += `
        <p> ${students[i].name} </p>
          <p> ${students[i].division} </p>
            <p> ${students[i].rollno} </p>
              
        `
    }
}

editbtn.addEventListener('click', () => {
    <button id="btn1" onclick="setEdit(${i})">Edit</button>
     updateStudent()
})

deletebtn.addEventListener('click', () => {
      <button id="btn2" onclick="deleteStudent(${i})">Delete</button> 
    deleteStudent()
})


btn.addEventListener('click', () => {
    addStudent ()
    clearfields()
    display()
})


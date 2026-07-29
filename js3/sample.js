let name = document.getElementById("name")
let age = document.getElementById("age")
let place = document.getElementById("place")
let btn = document.getElementById("btn")
let itemcontainer = document.getElementById("itemcontainer")
let table = document.getElementById("table")
let students = []

function addStudent () {
    let student = {
        name:name.value,
        age:age.value,
        place:place.value
    }

    students.push(student)

}

function clearfields() {
    name.value = ""
    age.value = ""
    place.value = ""
}

function display(){

    table.innerHTML = `
        <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Place</th>
            </tr>
    `
    
    for(let i=0;i<students.length;i++){
        table.innerHTML += `
  
           

            
                 <tr>
           <td>
                <p>${students[i].name}</p> </td>
              <td>
                <p>${students[i].age}</p> </td>
            <td>
                <p>${students[i].place}</p> </td>
                </tr>


        `
    }
}


btn.addEventListener('click',() => {
    addStudent()
    clearfields()
    display()
})



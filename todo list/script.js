let container = document.getElementById("container");
let note = document.getElementById("note");
let addbtn = document.getElementById("addbtn");
let notes = JSON.parse(localStorage.getItem("notes")) || [];

addbtn.addEventListener("click", () => {
    let notecontent = { id: Date.now(), content: note.value };
    note.value = "";

    if (notecontent.content == "") {
        alert("Empty list detected, plz fillout the field")
        return;
    }

    notes.push(notecontent);

    display();
    updateLocalStorage();
    clearfields();
});

function updateLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function clearfields() {
    note.value = ""
}

display();

function deleteNote(id) {
    let index = notes.findIndex(note => note.id === id);
    notes.splice(index, 1);

    updateLocalStorage();
    display();
}

function toggleComplete(id) {
    let index = notes.findIndex(note => note.id === id);
    notes[index].completed = !notes[index].completed;

    console.log(notes[index].completed)
    
    updateLocalStorage();
    display();
}


function display() {
    container.innerHTML = "";

    notes.forEach((item, index) => {

        container.innerHTML += `
            <div id="card">        
              <h4 style="text-decoration: ${item.completed ? 'line-through' : 'none'};">${item.content}</h4><br>
                   <button style="text-decoration: ${item.completed ? 'line-through' : 'none'};" id="completebtn" onclick="toggleComplete(${item.id})"> ${item.completed ? 'Not Completed' : 'Complete'} </button>
                    <button id="deletebtn" onclick="deleteNote(${item.id})"> Delete</button>
            </div>
        `
    })
}

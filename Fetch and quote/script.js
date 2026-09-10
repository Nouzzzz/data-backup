let gallery = document.getElementById("gallery")
// let users = []
// let pics = []

// function fetchcontent() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((responce) => responce.json())
//         .then((data) => {
//             users = data
//             display()
//         })

// }


// function display() {

//     users.forEach((user) => {
//         gallery.innerHTML += `
//         <div id="card">
//   <h5>Name: ${user.name}</h5>
//   <h5>Email: ${user.email}</h5>
//  </div>
//  `
//     })

 

// }
// fetchcontent()


// let quoteval = {};

// viewquotes();

function viewquotes() {
    fetch('https://dummyjson.com/quotes/random')
        .then((res) => res.json())
        .then((data) => {
            quoteval = data;
            console.log(quoteval.quote);
            showQuote();
        });
}

function showQuote() {
    let quoteElement = document.getElementById("quote");    
    quoteElement.textContent = quoteval.quote;

}

display()

function display() {
    gallery.innerHTML += `
        <div id="card">
        <button id="showbtn" onclick="viewquotes()">Show Quote</button><br>
        <h3 id="quote"></h3> 
        
        </div>
    `;
}

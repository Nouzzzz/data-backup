let content = document.getElementById("content");
let depositbtn = document.getElementById("depositbtn");
let withdrawbtn = document.getElementById("withdrawbtn");
let checkbalbtn = document.getElementById("checkbalbtn");
let details = document.getElementById("details");

let total = 0; 

depositbtn.addEventListener('click', () => {
    console.log("deposit clicked");
    depositMenu();
});

withdrawbtn.addEventListener('click', () => {
    console.log("withdraw clicked");
    withdrawMenu();
});

checkbalbtn.addEventListener('click', () => {
    console.log("check bal clicked");
    checkbal();
});


function depositMenu() {
    details.innerHTML = `
        <h1> Deposit menu </h1><br>
        <input type="number" id="depositid" placeholder="Enter amount to deposit"> <br>
        <button id="addbtn"> Add </button><br>
        <h3 id="msg"></h3>
    `;

    
    document.getElementById("addbtn").addEventListener("click", () => {
        let depositInput = document.getElementById("depositid");
        let amount = Number(depositInput.value); 
        let message = document.getElementById("msg");

        if (amount <= 0) {
            message.innerText = "Minimum value must be greater than 0";
        } else {
            total = total + amount; 
            message.innerText = `Amount added successfully`;
            depositInput.value = ""; 
        }
    });
}

function withdrawMenu() {
    details.innerHTML = `
        <h1>Withdraw menu </h1> <br>
        <input type="number" id="withdrawid" placeholder="Enter amount to withdraw"> <br>
        <button id="removebtn"> Withdraw</button><br>
        <h3 id="withdrawmsg"></h3>
    `;

    document.getElementById("removebtn").addEventListener("click", () => {
        let withdrawInput = document.getElementById("withdrawid");
        let amount = Number(withdrawInput.value);
        let message = document.getElementById("withdrawmsg");

        if (amount <= 0) {
            message.innerText = "Please enter a valid amount greater than 0";
        } else if (amount > total) {
            message.innerText = "Insufficient funds";
        } else {
            total = total - amount; 
            message.innerText = `Amount withdrawn successfully`;
            withdrawInput.value = ""; 
        }
    });
}

function checkbal() {
    details.innerHTML = `
    <h1>Total Balance : ${total} </h1>
    `
}

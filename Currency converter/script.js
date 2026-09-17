let amount = document.getElementById("inp");
let button = document.getElementById("btn");
let dropdown1 = document.getElementById("dropdown1");
let dropdown2 = document.getElementById("dropdown2");
let result = document.getElementById("result");

async function getCurrency() {
    const response = await fetch(
        "https://api.frankfurter.dev/v2/currencies"
    );

    const data = await response.json();

    let codes = data.map((code) => {
        return code.iso_code;
    });

    console.log(codes);

    codes.forEach((item) => {
        dropdown1.innerHTML += `
            <option value="${item}">${item}</option>
        `;
    });

    codes.forEach((item) => {
        dropdown2.innerHTML += `
            <option value="${item}">${item}</option>
        `;
    });

    dropdown1.value = "USD";
    dropdown2.value = "INR";
}

getCurrency();

async function convertCurrency() {

    if (amount.value === "") {
        return alert("enter an amount");
    }

    const response = await fetch(
        `https://api.frankfurter.dev/v2/rate/${dropdown1.value}/${dropdown2.value}`
    );

    const data = await response.json();

    console.log(data);

    const convertedAmount = data.rate * amount.value;

    console.log(convertedAmount);

    result.innerText =
        `${amount.value} ${dropdown1.value} = ${convertedAmount.toFixed(2)} ${dropdown2.value}`;
}

button.addEventListener("click", () => {
    convertCurrency();
});
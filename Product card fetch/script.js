let gallery = document.getElementById("gallery")

function viewquotes() {
    fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => {
            prod = data;
            console.log(prod)
           display(prod.products)
        });
}


viewquotes()

function display(products) {
    products.forEach((prod) => {
        gallery.innerHTML += `

            <div id="card">
            <img src="${prod.thumbnail}" alt="image" width="150px" height="150px">
            <h3>Product: ${prod.title}</h3>  
            <h3>Brand: ${prod.brand}</h3>
            <h3>Price: ${prod.price}</h3>
            <h3>Rating: ${prod.rating}</h3>
            <h3>Description: ${prod.description}</h3>
            </div>
        `;
    });
}

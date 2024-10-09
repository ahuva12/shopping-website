function displayNotebooks() {
    renderProducts(getProducts(notebooks));
}

function displayCraft() {
    renderProducts(getProducts(craft));
}

displayNotebooks();

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
function getProduct(product) {
    return `
        <div class="product">
            <h2>${product.title}</h2>
            <img src=${product.image} alt="title">
            <p>${product.price}</p>
        </div>
    `
}

function renderProducts(products) {
    return products.map(prod => getProduct(prod)).join("");
}
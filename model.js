function getProduct(product) {
    return `
        <div class="product">
            <h2>${product.title}</h2>
            <img src=${product.image} alt="title">
            <div class="inner-row">
            <button>הוספה לסל</button>
            <p>${product.price}</p>
            </div>
        </div>
    `
}

function getProducts(products) {
    return products.map(prod => getProduct(prod)).join("");
}
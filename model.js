function getProduct(product) {
    return `
        <div class="product">
            <h4>${product.title}</h4>
            <img src=${product.image} alt="title">
            <div class="inner-row">
            <button class="buttons">הוספה לסל</button>
            <p>${product.price}</p>
            </div>
        </div>
    `
}

function getProducts(products) {
    return products.map(prod => getProduct(prod)).join("");
}
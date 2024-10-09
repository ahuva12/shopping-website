function displayNotebooks() {
    renderProducts(getProducts(notebooks));
}

function displayCraft() {
    renderProducts(getProducts(craft));
}

function main() {
    displayNotebooks();
}

main();
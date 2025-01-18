// Redirect function
function redirectToDetails(element) {
    const productName = encodeURIComponent(element.dataset.name);
    const productPrice = encodeURIComponent(element.dataset.price);

    const targetUrl = `./item-details.html?name=${productName}&price=${productPrice}`;
    window.location.href = targetUrl;
}

// Function to parse query parameters and update DOM
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const productData = {
        name: params.get('name'),
        price: params.get('price'),
    };

    // Update HTML with the extracted data
    document.getElementById("item-name").innerHTML = productData.name || "No product name provided";
    document.getElementById("item-price").innerHTML = `Rs. ${productData.price || "0"}`;

    return productData;
}

document.addEventListener("DOMContentLoaded", () => {
    getQueryParams();
});

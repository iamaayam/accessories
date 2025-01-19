// Redirect function
function redirectToDetails(element) {
    const productName = encodeURIComponent(element.dataset.name);
    const productPrice = encodeURIComponent(element.dataset.price);
    const productValue = encodeURIComponent(element.dataset.value);
    const productImage = encodeURIComponent(
        element.querySelector('img').src
    );
        const targetUrl = `./item-details.html?name=${productName}&price=${productPrice}&value=${productValue}&image=${productImage}`;
    window.location.href = targetUrl;
}

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    
    const productData = {
        name: params.get('name'),
        price: params.get('price'),
        value: params.get('value'),
        image: params.get('image'),
    };
    
    const item1 = "description item1";
    const item2 = "description item2";
    const item3 = "description item3";
    // Update HTML with the extracted data
    document.getElementById("item-name").innerHTML = productData.name || "No product name provided";
    document.getElementById("item-price").innerHTML = `Rs. ${productData.price || "0"}`;
    if(productData.value == `1`){
        document.getElementById("item-description").innerHTML = item1;

    }
    else if(productData.value == `2`){
        document.getElementById("item-description").innerHTML = item2;
        console.log( productData.image );
        document.getElementById("item-image").src = productData.image; 

    }
    else if(productData.value == `3`){
        document.getElementById("item-description").innerHTML = item3;

    }
    return productData;
}

document.addEventListener("DOMContentLoaded", () => {
    getQueryParams();
});

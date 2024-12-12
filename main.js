
        let cart = document.getElementById("cart-add");
        const cartBadge = document.getElementById("cart-badge");
        let cartcount = 0;
        

        cart.addEventListener('click',()=> {
            cartcount ++;
            cartBadge.textContent = cartcount;
            cartBadge.style.display = "inline-block";
           

        }
    );
    document.addEventListener('DOMContentLoaded',()=>{
        const cartButtons = document.querySelectorAll('.addtocart');
        cartButtons.forEach(button =>{
            button.addEventListener('click',() =>{
                const item ={
                    id : button.getAttribute(data_id),
                    name: button.getAttribute(data_name),
                    price: button.getAttribute(data_price)
                };
                addtocart(item);
            });
        }) ;
        // Function to add item to cart in localStorage
    function addtocart(item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));

        document.getElementById('cart-badge').textContent = cart.length;
        alert(`${item.name} has been added to the cart!`);
        }

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-badge').textContent = cart.length;
    });
    document.addEventListener('DOMContentLoaded', () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const cartContainer = document.querySelector('.cart-container');
    
        if (cartItems.length === 0) {
            cartContainer.innerHTML = '<p>Your cart is empty!</p>';
        } else {
            cartItems.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <p><strong>${item.name}</strong></p>
                    <p>Price: Rs.${item.price}</p>
                `;
                cartContainer.appendChild(cartItem);
            });
        }
    });
    // let cartclick = document.getElementById("cart-click")
    // cartclick.addEventListener("click",function(){
    //     window.location.href('./cart.html');
    // });
 
    

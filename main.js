
        let cart = document.getElementById("cart-add");
        const cartBadge = document.getElementById("cart-badge");
        let cartcount = 0;
        

        cart.addEventListener('click',()=> {
            cartcount ++;
            cartBadge.textContent = cartcount;
            cartBadge.style.display = "inline-block";
        }
    );
    // let cartclick = document.getElementById("cart-click")
    // cartclick.addEventListener("click",function(){
    //     window.location.href('./cart.html');
    // });
    
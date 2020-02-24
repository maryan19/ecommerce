$(document).ready(function(){
    var shoppingCart = [];
    
    function addToCart(title, price) {
    	var product = {};
    	product.title = title;
    	product.price = price;
    	shoppingCart.push(product);
    	displayShoppingCart();
    }
    
    
    function displayShoppingCart() {
    	var totalPrice = 0;
    	var displayTitle = document.getElementById("displayTitle");
    	var displayPrice = document.getElementById("displayPrice");
    	for (var product in shoppingCart) {
    		displayTitle.innerHTML = shoppingCart[product].title;
    		displayPrice.innerHTML = shoppingCart[product].price;
    	
    	// title.createElement('div');
    	// div.className = "itemTitle";
    	// itemTitle = document.querySelectorAll(".itemTitle");
    	// itemTitle.innerHTML = shoppingCart[product].title;
    
    	} 
    }

    var book1 = document.getElementById("book1");
    book1.addEventListener("click", addToCart("Cracking the Coding Interview","$29.99"));


















});
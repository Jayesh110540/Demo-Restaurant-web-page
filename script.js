// =========================
// MOBILE MENU
// =========================

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("show");
}


// =========================
// MENU FILTER
// =========================

function filterMenu(category, button) {

    const foodCards =
        document.querySelectorAll(".food-card");

    const buttons =
        document.querySelectorAll(".category-buttons button");


    // Remove active class
    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });


    // Add active class
    button.classList.add("active");


    // Filter food
    foodCards.forEach(function(card) {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}


// =========================
// CART
// =========================

let cart = [];


// =========================
// ADD TO CART
// =========================

function addToCart(name, price) {

    const existingItem =
        cart.find(function(item) {
            return item.name === name;
        });


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }


    updateCart();

    alert(name + " added to cart!");
}


// =========================
// UPDATE CART
// =========================

function updateCart() {

    const cartItems =
        document.getElementById("cartItems
/* =========================================================
   GREEN LEAF PURE VEG RESTAURANT
   COMPLETE JAVASCRIPT
========================================================= */

"use strict";


/* =========================================================
   GLOBAL DATA
========================================================= */

let cart = [];

const recipes = {

    "paneer-butter": {
        title: "Paneer Butter Masala",
        subtitle: "Rich, creamy and delicious restaurant-style paneer.",
        time: "⏱️ Preparation: 15 min | Cooking: 25 min",

        ingredients: [
            "250 g paneer",
            "2 medium tomatoes",
            "1 medium onion",
            "1 tbsp butter",
            "1 tbsp oil",
            "1 tsp ginger-garlic paste",
            "1 tsp red chilli powder",
            "1/2 tsp turmeric powder",
            "1 tsp garam masala",
            "1/2 tsp kasuri methi",
            "3 tbsp fresh cream",
            "Salt to taste"
        ],

        steps: [
            "Heat oil and butter in a pan.",
            "Add chopped onion and cook until lightly golden.",
            "Add ginger-garlic paste and cook for a minute.",
            "Add chopped tomatoes and cook until soft.",
            "Add turmeric, chilli powder and salt.",
            "Blend the cooked mixture into a smooth gravy.",
            "Return the gravy to the pan and add paneer pieces.",
            "Add garam masala and kasuri methi.",
            "Finish with fresh cream and simmer for 2–3 minutes.",
            "Serve hot with naan, roti or rice."
        ]
    },


    "veg-biryani": {
        title: "Vegetable Biryani",
        subtitle: "Fragrant basmati rice cooked with fresh vegetables and aromatic spices.",
        time: "⏱️ Preparation: 20 min | Cooking: 35 min",

        ingredients: [
            "2 cups basmati rice",
            "1 cup mixed vegetables",
            "1 medium onion",
            "1 tomato",
            "2 green chillies",
            "1 tbsp ginger-garlic paste",
            "2 tbsp oil or ghee",
            "1 tsp biryani masala",
            "1/2 tsp turmeric powder",
            "1/2 tsp red chilli powder",
            "Whole spices",
            "Fresh coriander and mint",
            "Salt to taste"
        ],

        steps: [
            "Wash and soak basmati rice for about 20 minutes.",
            "Cook the rice until it is about 80% done and keep aside.",
            "Heat oil or ghee in a heavy pan.",
            "Add whole spices and sliced onion.",
            "Add ginger-garlic paste and green chillies.",
            "Add tomato and mixed vegetables.",
            "Add turmeric, chilli powder, biryani masala and salt.",
            "Cook the vegetables until slightly tender.",
            "Layer the cooked rice over the vegetable mixture.",
            "Add mint and coriander.",
            "Cover and cook on low heat for 10–12 minutes.",
            "Gently mix and serve hot."
        ]
    },


    "aloo-paratha": {
        title: "Aloo Paratha",
        subtitle: "Golden, crispy and stuffed with flavourful potato masala.",
        time: "⏱️ Preparation: 20 min | Cooking: 20 min",

        ingredients: [
            "2 cups wheat flour",
            "4 medium potatoes",
            "1–2 green chillies",
            "1 tsp ajwain",
            "1 tsp coriander powder",
            "1/2 tsp turmeric powder",
            "1/2 tsp garam masala",
            "Fresh coriander",
            "Salt to taste",
            "Water as required",
            "Ghee or oil for cooking"
        ],

        steps: [
            "Boil the potatoes until completely cooked.",
            "Peel and mash the potatoes thoroughly.",
            "Add green chilli, ajwain, coriander powder, turmeric and garam masala.",
            "Add chopped fresh coriander and salt.",
            "Mix the stuffing until all spices are evenly combined.",
            "Prepare a soft wheat-flour dough.",
            "Take a dough ball and roll it slightly.",
            "Place potato stuffing in the centre.",
            "Seal the edges and roll gently into a paratha.",
            "Heat a tawa and place the paratha on it.",
            "Cook both sides with ghee or oil until golden and crisp.",
            "Serve hot with curd, pickle or chutney."
        ]
    }

};


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    setTodayDate();

    setupPhoneValidation();

    setupReservationForm();

    setupBackToTop();

    setupSearch();

    setupKeyboardControls();

    updateCart();

});


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    if (!navLinks) {
        return;
    }

    navLinks.classList.toggle("show");
}


function closeMenu() {

    const navLinks = document.getElementById("navLinks");

    if (!navLinks) {
        return;
    }

    navLinks.classList.remove("show");
}


/* Close mobile menu when clicking outside */

document.addEventListener("click", function (event) {

    const navLinks = document.getElementById("navLinks");
    const menuToggle = document.querySelector(".menu-toggle");

    if (!navLinks || !menuToggle) {
        return;
    }

    if (
        navLinks.classList.contains("show") &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        navLinks.classList.remove("show");
    }

});


/* =========================================================
   SEARCH
========================================================= */

function openSearch() {

    const overlay = document.getElementById("searchOverlay");
    const input = document.getElementById("searchInput");

    if (!overlay) {
        return;
    }

    overlay.classList.add("show");

    document.body.classList.add("no-scroll");

    setTimeout(function () {

        if (input) {
            input.focus();
        }

    }, 100);

}


function closeSearch() {

    const overlay = document.getElementById("searchOverlay");
    const input = document.getElementById("searchInput");

    if (!overlay) {
        return;
    }

    overlay.classList.remove("show");

    document.body.classList.remove("no-scroll");

    if (input) {
        input.value = "";
    }

    resetMenuSearch();

}


function setupSearch() {

    const input = document.getElementById("searchInput");

    if (!input) {
        return;
    }

    input.addEventListener("input", function () {

        searchFood();

    });

    input.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            searchFood();

        }

    });

}


function searchFood() {

    const input = document.getElementById("searchInput");

    if (!input) {
        return;
    }

    const query = input.value.trim().toLowerCase();

    const cards = document.querySelectorAll("#menuGrid .food-card");

    cards.forEach(function (card) {

        const text = card.textContent.toLowerCase();

        if (query === "" || text.includes(query)) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });

    if (query !== "") {

        const menuSection = document.getElementById("menu");

        if (menuSection) {

            setTimeout(function () {

                menuSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 150);

        }

    }

}


function resetMenuSearch() {

    const cards = document.querySelectorAll("#menuGrid .food-card");

    cards.forEach(function (card) {

        card.classList.remove("hidden");

    });

}


/* Search overlay outside click */

document.addEventListener("click", function (event) {

    const overlay = document.getElementById("searchOverlay");

    if (!overlay) {
        return;
    }

    if (
        overlay.classList.contains("show") &&
        event.target === overlay
    ) {

        closeSearch();

    }

});


/* =========================================================
   MENU FILTER
========================================================= */

function filterMenu(category, button) {

    const cards = document.querySelectorAll("#menuGrid .food-card");

    const buttons = document.querySelectorAll(".filter-button");

    buttons.forEach(function (item) {

        item.classList.remove("active");

    });

    if (button) {

        button.classList.add("active");

    }

    cards.forEach(function (card) {

        const cardCategory = card.dataset.category;

        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });

}


/* =========================================================
   CART
========================================================= */

function addToCart(name, price) {

    const existingItem = cart.find(function (item) {

        return item.name === name;

    });


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            name: name,
            price: Number(price),
            quantity: 1
        });

    }


    updateCart();

    openCart();

}


function updateCart() {

    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartSubtotal = document.getElementById("cartSubtotal");
    const cartTotal = document.getElementById("cartTotal");


    /* Total quantity */

    const totalQuantity = cart.reduce(function (total, item) {

        return total + item.quantity;

    }, 0);


    /* Subtotal */

    const subtotal = cart.reduce(function (total, item) {

        return total + (item.price * item.quantity);

    }, 0);


    if (cartCount) {

        cartCount.textContent = totalQuantity;

    }


    if (cartSubtotal) {

        cartSubtotal.textContent = formatCurrency(subtotal);

    }


    if (cartTotal) {

        cartTotal.textContent = formatCurrency(subtotal);

    }


    if (!cartItems) {
        return;
    }


    /* Empty cart */

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>Your cart is empty</h3>

                <p>
                    Add some delicious vegetarian dishes to get started.
                </p>

            </div>
        `;

        return;

    }


    /* Cart items */

    cartItems.innerHTML = cart.map(function (item, index) {

        const itemTotal = item.price * item.quantity;

        return `
            <div class="cart-item">

                <div class="cart-item-info">

                    <h4>
                        ${escapeHTML(item.name)}
                    </h4>

                    <p>
                        ${formatCurrency(item.price)}
                    </p>

                    <div class="quantity">

                        <button
                            type="button"
                            onclick="changeQuantity(${index}, -1)"
                            aria-label="Decrease quantity">
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            type="button"
                            onclick="changeQuantity(${index}, 1)"
                            aria-label="Increase quantity">
                            +
                        </button>

                    </div>

                </div>

                <div style="text-align:right;">

                    <strong style="
                        display:block;
                        color:#1d2a1e;
                        font-size:13px;
                        margin-bottom:8px;
                    ">
                        ${formatCurrency(itemTotal)}
                    </strong>

                    <button
                        type="button"
                        class="remove-btn"
                        onclick="removeItem(${index})">
                        Remove
                    </button>

                </div>

            </div>
        `;

    }).join("");

}


function changeQuantity(index, amount) {

    if (!cart[index]) {
        return;
    }

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    updateCart();

}


function removeItem(index) {

    if (!cart[index]) {
        return;
    }

    cart.splice(index, 1);

    updateCart();

}


function openCart() {

    const overlay = document.getElementById("cartOverlay");

    if (!overlay) {
        return;
    }

    updateCart();

    overlay.classList.add("show");

    document.body.classList.add("no-scroll");

}


function closeCart() {

    const overlay = document.getElementById("cartOverlay");

    if (!overlay) {
        return;
    }

    overlay.classList.remove("show");

    document.body.classList.remove("no-scroll");

}


/* Close cart by clicking outside sidebar */

document.addEventListener("click", function (event) {

    const overlay = document.getElementById("cartOverlay");

    if (!overlay) {
        return;
    }

    if (
        overlay.classList.contains("show") &&
        event.target === overlay
    ) {

        closeCart();

    }

});


/* =========================================================
   CHECKOUT
========================================================= */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty.\n\nPlease add some dishes before placing an order."
        );

        return;

    }


    let orderText = "Green Leaf Pure Veg Restaurant\n\n";
    orderText += "Order Details:\n";


    cart.forEach(function (item) {

        orderText +=
            `${item.name} × ${item.quantity} = ${formatCurrency(item.price * item.quantity)}\n`;

    });


    const total = cart.reduce(function (sum, item) {

        return sum + (item.price * item.quantity);

    }, 0);


    orderText += `\nTotal: ${formatCurrency(total)}`;


    const confirmOrder = confirm(
        orderText +
        "\n\nWould you like to place this order?"
    );


    if (!confirmOrder) {
        return;
    }


    alert(
        "Thank you for your order! 🌿\n\n" +
        "Your order request has been received.\n" +
        "Our restaurant team will contact you shortly."
    );


    cart = [];

    updateCart();

    closeCart();

}


/* =========================================================
   RECIPE MODAL
========================================================= */

function showRecipe(recipeId) {

    const modal = document.getElementById("recipeModal");
    const content = document.getElementById("recipeContent");

    const recipe = recipes[recipeId];


    if (!modal || !content || !recipe) {
        return;
    }


    const ingredientsHTML = recipe.ingredients.map(function (item) {

        return `<li>${escapeHTML(item)}</li>`;

    }).join("");


    const stepsHTML = recipe.steps.map(function (step) {

        return `<li>${escapeHTML(step)}</li>`;

    }).join("");


    content.innerHTML = `

        <span class="section-label">
            GREEN LEAF RECIPE
        </span>

        <h2>
            ${escapeHTML(recipe.title)}
        </h2>

        <p class="recipe-subtitle">
            ${escapeHTML(recipe.subtitle)}
        </p>

        <span class="recipe-time">
            ${escapeHTML(recipe.time)}
        </span>

        <h3>
            Ingredients
        </h3>

        <ul>
            ${ingredientsHTML}
        </ul>

        <h3>
            Method
        </h3>

        <ol>
            ${stepsHTML}
        </ol>

    `;


    modal.classList.add("show");

    document.body.classList.add("no-scroll");

}


function closeRecipe() {

    const modal = document.getElementById("recipeModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.classList.remove("no-scroll");

}


/* Recipe modal outside click */

document.addEventListener("click", function (event) {

    const modal = document.getElementById("recipeModal");

    if (!modal) {
        return;
    }

    if (
        modal.classList.contains("show") &&
        event.target === modal
    ) {

        closeRecipe();

    }

});


/* =========================================================
   RESERVATION
========================================================= */

function setupReservationForm() {

    const form = document.getElementById("reservationForm");

    if (!form) {
        return;
    }


    form.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = document.getElementById("name");
        const phone = document.getElementById("phone");
        const date = document.getElementById("date");
        const time = document.getElementById("time");
        const guests = document.getElementById("guests");


        if (!name || !phone || !date || !time || !guests) {
            return;
        }


        const cleanPhone = phone.value.replace(/\D/g, "");


        if (!/^[6-9]\d{9}$/.test(cleanPhone)) {

            alert(
                "Please enter a valid 10-digit Indian mobile number."
            );

            phone.focus();

            return;

        }


        if (!date.value) {

            alert("Please select a reservation date.");

            date.focus();

            return;

        }


        if (!time.value) {

            alert("Please select a reservation time.");

            time.focus();

            return;

        }


        if (!guests.value) {

            alert("Please select the number of guests.");

            guests.focus();

            return;

        }


        const formattedDate = formatDate(date.value);


        alert(
            "Reservation Request Sent! 🌿\n\n" +
            "Name: " + name.value.trim() + "\n" +
            "Date: " + formattedDate + "\n" +
            "Time: " + time.value + "\n" +
            "Guests: " + guests.value + "\n\n" +
            "Thank you for choosing Green Leaf."
        );


        form.reset();

        setTodayDate();

    });

}


/* =========================================================
   PHONE VALIDATION
========================================================= */

function setupPhoneValidation() {

    const phone = document.getElementById("phone");

    if (!phone) {
        return;
    }


    phone.addEventListener("input", function () {

        this.value = this.value
            .replace(/\D/g, "")
            .slice(0, 10);

    });

}


/* =========================================================
   DATE
========================================================= */

function setTodayDate() {

    const dateInput = document.getElementById("date");

    if (!dateInput) {
        return;
    }


    const today = new Date();

    const year = today.getFullYear();

    const month = String(
        today.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        today.getDate()
    ).padStart(2, "0");


    const todayString =
        `${year}-${month}-${day}`;


    dateInput.min = todayString;

}


function formatDate(dateString) {

    if (!dateString) {
        return "";
    }

    const date = new Date(dateString + "T00:00:00");

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    );

}


/* =========================================================
   BACK TO TOP
========================================================= */

function setupBackToTop() {

    const button = document.getElementById("backToTop");

    if (!button) {
        return;
    }


    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });


    button.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

function setupKeyboardControls() {

    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") {
            return;
        }


        const searchOverlay =
            document.getElementById("searchOverlay");

        const cartOverlay =
            document.getElementById("cartOverlay");

        const recipeModal =
            document.getElementById("recipeModal");


        if (
            recipeModal &&
            recipeModal.classList.contains("show")
        ) {

            closeRecipe();

            return;

        }


        if (
            searchOverlay &&
            searchOverlay.classList.contains("show")
        ) {

            closeSearch();

            return;

        }


        if (
            cartOverlay &&
            cartOverlay.classList.contains("show")
        ) {

            closeCart();

            return;

        }

    });

}


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document.addEventListener("click", function (event) {

    const link = event.target.closest(
        'a[href^="#"]'
    );


    if (!link) {
        return;
    }


    const href = link.getAttribute("href");


    if (
        !href ||
        href === "#" ||
        href.length <= 1
    ) {

        return;

    }


    const target = document.querySelector(href);


    if (!target) {
        return;
    }


    event.preventDefault();


    closeMenu();


    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


/* =========================================================
   FOOTER YEAR
========================================================= */

function updateFooterYear() {

    const yearElement =
        document.getElementById("currentYear");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

}


updateFooterYear();


/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

function formatCurrency(amount) {

    return "₹" + Number(amount).toLocaleString("en-IN");

}


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}
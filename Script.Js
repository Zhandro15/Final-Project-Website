let cart = [];

// ADD TO CART
function addToCart(name, price) {
    cart.push({ name, price });
    document.getElementById("cartCount").textContent = cart.length;
    alert(name + " added to cart!");
}

// OPEN & CLOSE CART
document.getElementById("cartBtn").onclick = () => {
    document.getElementById("cartModal").style.display = "flex";

    let list = document.getElementById("cartItems");
    list.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₱${item.price}`;
    list.appendChild(li);
    total += item.price;
});
    document.getElementById("totalPrice").textContent = total;
};

document.getElementById("closeModal").onclick = () => {
    document.getElementById("cartModal").style.display = "none";
};

// CLICK OUTSIDE MODAL TO CLOSE
window.onclick = e => {
    let modal = document.getElementById("cartModal");
    if (e.target === modal) modal.style.display = "none";
};

// DARK MODE
document.getElementById("darkToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// CATEGORY FILTER
let categoryButtons = document.querySelectorAll(".cat-btn");
let cards = document.querySelectorAll(".product-card");

categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        categoryButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        let filter = btn.getAttribute("data-filter");

        cards.forEach(card => {
            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// SEARCH
document.getElementById("searchInput").addEventListener("keyup", function() {
    let keyword = this.value.toLowerCase();

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(keyword) ? "block" : "none";
    });
});
document.getElementById("checkoutBtn").onclick = () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let total = document.getElementById("totalPrice").textContent;

    alert("Thank you for your purchase! Total: ₱" + total);

    // Clear cart after checkout
    cart = [];
    document.getElementById("cartCount").textContent = 0;
    document.getElementById("cartItems").innerHTML = "";
    document.getElementById("totalPrice").textContent = 0;

    document.getElementById("cartModal").style.display = "none";
};

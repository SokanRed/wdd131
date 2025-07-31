

// Product Array
const products = [
    { id: "prod1", name: "Wireless Headphones" },
    { id: "prod2", name: "Smart Watch" },
    { id: "prod3", name: "Bluetooth Speaker" },
    { id: "prod4", name: "4K Monitor" },
    { id: "prod5", name: "Gaming Mouse" }
];

// Populate select field
window.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
});

// Review Counter in LocalStorage
const key = "reviewCount";
let count = parseInt(localStorage.getItem(key)) || 0;
count++;
localStorage.setItem(key, count);
document.getElementById("reviewCount").textContent = count;
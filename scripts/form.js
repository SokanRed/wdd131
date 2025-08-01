// ============Display the copyright year========================
// Get the current year and display it in the footer
document.getElementById('copyright-year').textContent = new Date().getFullYear();
//===============================================================

// ============Display Last Modification Date and Time in Footer Using JavaScript=======
// Get the date and time of the last modification of the page
const lastModified = new Date(document.lastModified);

// Extract the month, day, year, hours, minutes, and seconds
let month = lastModified.getMonth() + 1; // Months start at 0, so we add 1
let day = lastModified.getDate();
let year = lastModified.getFullYear();
let hours = lastModified.getHours();
let minutes = lastModified.getMinutes();
let seconds = lastModified.getSeconds();

// Ensure the month and day are two digits (e.g., 09 instead of 9)
if (month < 10) month = '0' + month;
if (day < 10) day = '0' + day;

// Ensure the hours, minutes, and seconds are two digits as well
if (hours < 10) hours = '0' + hours;
if (minutes < 10) minutes = '0' + minutes;
if (seconds < 10) seconds = '0' + seconds;

// Format the date and time
const formattedDate = `${month}/${day}/${year} - ${hours}:${minutes}:${seconds}`;

// Display the formatted date in the footer with the ID "lastModified"
document.getElementById('lastModified').textContent = `Last modified: ${formattedDate}`;
//=======================================================================================

// Product Array
const products = [
    { id: "prod1", name: "4K Monitor" },
    { id: "prod2", name: "Bluetooth Speaker" },
    { id: "prod3", name: "Gaming Mouse" },
    { id: "prod4", name: "Mechanical Keyboard" },
    { id: "prod5", name: "Noise-Cancelling Earbuds" },
    { id: "prod6", name: "Portable Charger" },
    { id: "prod7", name: "Robot Vacuum Cleaner" },
    { id: "prod8", name: "Smart Thermostat" },
    { id: "prod9", name: "Smart Watch" },
    { id: "prod10", name: "Wireless Headphones" }
    
    
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
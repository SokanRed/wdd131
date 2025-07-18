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

// Select the hamburger menu button
const hamButton = document.querySelector("#menu");

// Select the navigation bar element
const navigation = document.querySelector(".navBar");

// Select the main content area
const mainContent = document.querySelector('main');

// Add a click event listener to the hamburger menu button
hamButton.addEventListener("click", () => {
    // Toggle the "open" class on the navigation to show/hide the menu
    navigation.classList.toggle("open");

    // Toggle the "open" class on the button to change its icon (☰ ↔ ❎)
    hamButton.classList.toggle("open");

    // Toggle a class on <main> to push content down when the menu is open
    mainContent.classList.toggle('push-down');
});

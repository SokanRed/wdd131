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

//========================Weather informations===========================================
// Static weather values
const temperatureCelsius = 10; // in °C
const windSpeedKmh = 10;       // in km/h

// Display static values in HTML
document.getElementById("temp").textContent = `${temperatureCelsius} °C`;
document.getElementById("wind").textContent = `${windSpeedKmh} km/h`;
document.getElementById("conditions").textContent = "Cloudy";

// Wind Chill Calculation Function
function calculateWindChill(tempC, speedKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * tempC * Math.pow(speedKmh, 0.16)
    ).toFixed(1);
}

// Determine if wind chill is applicable and update DOM
const windchillElement = document.getElementById("windchill");

if (temperatureCelsius <= 10 && windSpeedKmh > 4.8) {
    const windChill = calculateWindChill(temperatureCelsius, windSpeedKmh);
    windchillElement.textContent = `${windChill} °C`;
} else {
    windchillElement.textContent = "N/A";
}
//=======================================================================================
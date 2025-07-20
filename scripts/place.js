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
const apiKey = "49e07442d0144224d5e743d782ab9e77"; // Replace with your OpenWeatherMap API key
const url = `https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&units=metric&appid=${apiKey}&lang=en`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const temp = data.main.temp;
        const conditions = data.weather[0].description;
        const windSpeedMs = data.wind.speed;
        const windSpeedKmh = (windSpeedMs * 3.6).toFixed(1);

        // Calculate Wind Chill based on standard conditions
        let windChill;
        if (temp <= 10 && windSpeedKmh > 4.8) {
            const v = windSpeedKmh;
            windChill = (
                13.12 +
                0.6215 * temp -
                11.37 * Math.pow(v, 0.16) +
                0.3965 * temp * Math.pow(v, 0.16)
            ).toFixed(1) + " °C";
        } else {
            windChill = null;
        }

        document.getElementById("temp").textContent = `${temp} °C`;
        document.getElementById("conditions").textContent = capitalize(conditions);
        document.getElementById("wind").textContent = `${windSpeedKmh} km/h`;
        
        const windChillElement = document.getElementById("windchill");
        if (windChill) {
            windChillElement.textContent = windChill;
        } else {
            windChillElement.parentElement.style.display = "none";
        }
    })
    .catch(error => {
        document.getElementById("temp").textContent = "Error";
        document.getElementById("conditions").textContent = "Error";
        document.getElementById("wind").textContent = "Error";
        document.getElementById("windchill").textContent = "Error";
        console.error("Weather API error:", error);
    });

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
//==========================================================================
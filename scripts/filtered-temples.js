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

// Create an array of temple objects (each object contains image path and caption)
const temples = [
  {
    templeName: "St George Utah",
    location: "St George, Utah",
    dedicated: "1877, April, 6-8",
    area: 143969,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah",
    dedicated: "1884, May, 17-19",
    area: 119619,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
  },
  {
    templeName:"Manti Utah",
    location: "Manti, Utah",
    dedicated: "1888, May, 17",
    area: 74792,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6-24",
    area: 382207,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Bern, Switzerland",
    dedicated: "1955, September, 9-10",
    area: 35546,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Washington D.C.",
    dedicated: "1974, November, 19-22",
    area: 156558,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
  },
  {
    templeName: "Taipei Taiwan ",
    location: "Taipei, Taiwan",
    dedicated: "1984, November, 17-18",
    area: 9945,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/taipei-taiwan-temple/taipei-taiwan-temple-8296-main.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California",
    dedicated: "1993, April, 25-30",
    area: 72000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19-21",
    area: 45800,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois",
    dedicated: "2002, November, 16",
    area: 54000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg"
  },
  {
    templeName: "Phoenix Arizona",
    location: "Phoenix, Arizona",
    dedicated: "2014, November, 16",
    area: 64870,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-12711-main.jpg"
  },
  {
    templeName: "Provo City Center Utah",
    location: "Provo, Utah",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2022, May, 22",
    area: 6861,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
  },
  {
    templeName: "Helena Montana",
    location: "Helena, Montana",
    dedicated: "2023, May, 7",
    area: 9794,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/helena-montana-temple/helena-montana-temple-37751-main.jpg"
  }
];


// Select the gallery container where all temple figures will be inserted
//const gallery = document.getElementById("gallery");
// Create the HTML structure using template literals
/*temples.forEach(temple => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
        <div class="card-content">
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </div>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;

  gallery.appendChild(card);
});*/

// Sélection des éléments DOM
const gallery = document.getElementById("gallery");
const navButtons = document.querySelectorAll(".navigation a");

// Fonction pour vider la galerie
function clearGallery() {
  gallery.innerHTML = "";
}

// Fonction pour afficher les temples
function displayTemples(filteredTemples) {
  clearGallery();
  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-content">
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </div>
      <img srcset="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    gallery.appendChild(card);
  });
}

// Fonction de filtrage
function filterTemples(filter) {
  let filteredTemples;

  switch (filter) {
    case "old":
      filteredTemples = temples.filter(t => parseInt(t.dedicated) < 1900);
      break;
    case "new":
      filteredTemples = temples.filter(t => parseInt(t.dedicated) > 2000);
      break;
    case "large":
      filteredTemples = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter(t => t.area < 10000);
      break;
    case "all":
    default:
      filteredTemples = temples;
  }

  displayTemples(filteredTemples);
}

// Gestion des clics sur la navbar
navButtons.forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();

    // Mise à jour des classes actives
    navButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    filterTemples(filter);
  });
});

// Afficher tous les temples au chargement
displayTemples(temples);
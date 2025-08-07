//============================ Display the copyright year ========================
// Get the current year and display it in the footer
document.getElementById('copyright-year').textContent = new Date().getFullYear();
//============================ Display the copyright year ========================

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
// ============Display Last Modification Date and Time in Footer Using JavaScript========

//============================ Navigation Bar Page Active Gestion =====================
// Get the current page filename, removing any query parameters
const urlPath = window.location.pathname;
const currentPage = urlPath.substring(urlPath.lastIndexOf("/") + 1).split("?")[0];

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach(link => {
    const href = link.getAttribute("href");
    // Skip empty, "#" or JavaScript links
    if (!href || href === "#" || href.startsWith("javascript")) return;

    // Remove any query parameters from the href
    const hrefClean = href.split("?")[0];

    // Compare the link's href to the current page
    if (hrefClean === currentPage) {
        link.classList.add("active");

        // If the link is inside a dropdown, also highlight its parent
        const dropdownMenu = link.closest(".dropdown-menu");
        if (dropdownMenu) {
            const mainDropdownLink = dropdownMenu.previousElementSibling;
            if (mainDropdownLink) {
                mainDropdownLink.classList.add("active");
            }
        }
    }
});
//============================ Navigation Bar Pacge Active Gestion ===========================

//================================ Responsive Menu ===========================================
const menuBtn = document.getElementById('menu');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navMenu.classList.toggle('show');
});

// Optional: prevent dropdowns from opening on hover in mobile
document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function (e) {
        const parent = this.parentElement;
        parent.classList.toggle('open');
        e.preventDefault();
    });
});
//================================ Responsive Menu ===========================================

//============================= introduction Contain ==========================================
const introContent = {
    title: "Welcome to Historic European Architecture",
    description: `This website showcases famous architectural landmarks across Europe,
    including castles, cathedrals, and theatres. You'll discover the artistic and historical
    richness of these structures with photos, facts, and interactive features. Whether you're
    planning a trip or just exploring from home, this site invites you to journey through time
    and style.`
};

const categories = [
    {
        title: "Castles",
        image: "images/castle.webp",
        description: "Step back into history with majestic medieval and renaissance castles.",
        link: "castles.html"
    },
    {
        title: "Cathedrals",
        image: "images/cathedral.webp",
        description: "Discover Europe's grand cathedrals with Gothic, Romanesque, and Baroque styles.",
        link: "cathedrals.html"
    },

    {
        title: "Theatres",
        image: "images/theatre.webp",
        description: "Experience the elegance of historic European theatres and opera houses.",
        link: "theatres.html"
    }
];

function displayIntroContent() {
    const intro = document.getElementById("intro-section");
    if (!intro) return;

    intro.innerHTML = `
    <h1>${introContent.title}</h1>
    <p>${introContent.description}</p>
  `;
}

function displayCategoryCards() {
    const container = document.getElementById("category-cards");
    if (!container) return;

    categories.forEach(category => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <img src="${category.image}" alt="${category.title}" loading="lazy">
      <h2>${category.title}</h2>
      <p>${category.description}</p>
      <a href="${category.link}">Explore ${category.title}</a>
    `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayIntroContent();
    displayCategoryCards();
});
//============================= introduction Contain ==========================================

//============================= Castles =======================================================
const introCastlesContent = {
    title: "Welcome to Historic European Castles Architecture",
    description: `Europe is home to some of the most magnificent castles in the world, 
    each telling stories of royalty, war, architecture, and legend. 
    From the fairy-tale towers of Neuschwanstein in Germany to the haunting walls of Bran Castle in Romania, 
    these structures represent centuries of cultural heritage and political power. Whether perched on mountaintops, 
    surrounded by moats, or nestled in forests, these castles reflect the artistic and defensive ingenuity of their times. This page invites you to explore a curated selection of Europe’s most iconic castles, showcasing their origins, styles, architects, and historical significance. the most stunning and historic castles across Europe, from medieval fortresses to romantic palaces.`
};
const castles = [
    {
        name: "Château de Chambord",
        location: "Loir-et-Cher, France",
        lat: 47.6161,
        lng: 1.5163,
        date: "1519 - 1547",
        architect: "Domenico da Cortona",
        style: "French Renaissance",
        classification: "UNESCO World Heritage Site",
        image: "images/castles/chambord.webp"
    },
    {
        name: "Edinburgh Castle",
        location: "Edinburgh, Scotland",
        lat: 55.9486,
        lng: -3.1999,
        date: "12th century - present",
        architect: "Various",
        style: "Medieval, Gothic",
        classification: "Historic Fortress",
        image: "images/castles/edinburgh.webp"
    },
    {
        name: "Alhambra",
        location: "Granada, Spain",
        lat: 37.1761,
        lng: -3.5881,
        date: "13th - 15th century",
        architect: "Nasrid dynasty",
        style: "Islamic, Moorish",
        classification: "UNESCO World Heritage Site",
        image: "images/castles/alhambra.webp"
    },
    {
        name: "Bojnice Castle",
        location: "Bojnice, Slovakia",
        lat: 48.7817,
        lng: 18.5772,
        date: "12th century - 20th century",
        architect: "Ján Pálffy",
        style: "Romantic, Gothic Revival",
        classification: "National Cultural Monument",
        image: "images/castles/bojnice.webp"
    },
    {
        name: "Arundel Castle",
        location: "West Sussex, England",
        lat: 50.8549,
        lng: -0.5569,
        date: "11th century",
        architect: "Roger de Montgomery",
        style: "Norman, Gothic Revival",
        classification: "Grade I listed building",
        image: "images/castles/arundel.webp"
    },
    {
        name: "Hever Castle",
        location: "Kent, England",
        lat: 51.1869,
        lng: 0.1133,
        date: "13th century",
        architect: "Unknown",
        style: "Tudor",
        classification: "Historic House Museum",
        image: "images/castles/hever.webp"
    },
    {
        name: "Bran Castle",
        location: "Bran, Romania",
        lat: 45.5156,
        lng: 25.3670,
        date: "1377",
        architect: "Unknown",
        style: "Medieval",
        classification: "National Monument",
        image: "images/castles/bran.webp"
    },
    {
        name: "Leeds Castle",
        location: "Kent, England",
        lat: 51.2470,
        lng: 0.6305,
        date: "1119",
        architect: "Robert de Crèvecœur",
        style: "Medieval / Tudor",
        classification: "Grade I listed building",
        image: "images/castles/leeds.webp"
    }
];

function displayIntroCastlesContent() {
    const intro = document.getElementById("introCastlesSection");
    if (!intro) return;

    intro.innerHTML = `
    <h1>${introCastlesContent.title}</h1>
    <p>${introCastlesContent.description}</p>
  `;
}

function displayCastlesCards(data) {
    const container = document.getElementById("castles-list");
    if (!container) return;
    container.innerHTML = ""; // Clear before adding

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        img.loading = "lazy";
        card.appendChild(img);

        const content = document.createElement("div");
        content.className = "card-content";

        const title = document.createElement("h2");
        title.textContent = item.name;
        content.appendChild(title);

        const locationP = document.createElement("p");
        locationP.innerHTML = `<strong>Location:</strong> 
            <a href="map.html?lat=${item.lat}&lng=${item.lng}" target="_blank">${item.location}</a>`;
        content.appendChild(locationP);

        const dateP = document.createElement("p");
        dateP.innerHTML = `<strong>Date:</strong> ${item.date}`;
        content.appendChild(dateP);

        const archP = document.createElement("p");
        archP.innerHTML = `<strong>Architect/Patron:</strong> ${item.architect}`;
        content.appendChild(archP);

        const styleP = document.createElement("p");
        styleP.innerHTML = `<strong>Style:</strong> ${item.style}`;
        content.appendChild(styleP);

        const classP = document.createElement("p");
        classP.innerHTML = `<strong>Classification:</strong> ${item.classification}`;
        content.appendChild(classP);

        const iconBar = document.createElement("div");
        iconBar.className = "icon-bar";

        const favIcon = document.createElement("img");
        favIcon.src = "icons/favorite.png";
        favIcon.alt = "Add to Favorites";
        favIcon.title = "Add to Favorites";
        favIcon.className = "icon-btn";
        favIcon.addEventListener("click", () => {
            addToFavorites(item.name, item.image, item.location);
        });

        const visitedIcon = document.createElement("img");
        visitedIcon.src = "icons/visited.png";
        visitedIcon.alt = "Mark as Visited";
        visitedIcon.title = "Mark as Visited";
        visitedIcon.className = "icon-btn";
        visitedIcon.addEventListener("click", () => {
            addToVisited(item.name, item.image, item.location);
        });

        const toVisitIcon = document.createElement("img");
        toVisitIcon.src = "icons/tovisit.png";
        toVisitIcon.alt = "Add to To Visit";
        toVisitIcon.title = "Add to To Visit";
        toVisitIcon.className = "icon-btn";
        toVisitIcon.addEventListener("click", () => {
            addToToVisit(item.name, item.image, item.location);
        });

        iconBar.appendChild(favIcon);
        iconBar.appendChild(visitedIcon);
        iconBar.appendChild(toVisitIcon);

        content.appendChild(iconBar);
        card.appendChild(content);
        container.appendChild(card);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    displayIntroCastlesContent();
    displayCastlesCards(castles);
});

//============================= Castles =======================================================

//============================= Cathedrals ====================================================
const introCathedralsContent = {
    title: "Welcome to Historic European Cathedrals Architecture",
    description: `European cathedrals stand as monumental achievements of faith, art, 
    and engineering. Across the continent, these majestic buildings have shaped skylines 
    and societies for centuries, reflecting the evolution of religious practice, political power, 
    and architectural innovation. From soaring Gothic spires to intricate Romanesque carvings, 
    each cathedral is a testament to the devotion and creativity of the people who built them. 
    This collection invites you to explore the diversity and significance of Europe's most iconic cathedrals, 
    each carrying a unique story etched in stone and stained glass.`
};

const cathedrals = [

    {
        name: "Notre-Dame de Paris",
        location: "Paris, France",
        lat: 48.8530,
        lng: 2.3499,
        date: "1163 - 1345",
        architect: "Jean de Chelles / Pierre de Montreuil",
        style: "French Gothic",
        classification: "UNESCO World Heritage Site",
        image: "images/cathedrals/paris.webp"
    },
    {
        name: "Milan Cathedral (Duomo di Milano)",
        location: "Milan, Italy",
        lat: 45.4642,
        lng: 9.1916,
        date: "1386 - 1965",
        architect: "Simone da Orsenigo and others",
        style: "Italian Gothic",
        classification: "National Monument",
        image: "images/cathedrals/milan.webp"
    },
    {
        name: "St. Paul's Cathedral",
        location: "London, England",
        lat: 51.5138,
        lng: -0.0984,
        date: "1675 - 1710",
        architect: "Sir Christopher Wren",
        style: "English Baroque",
        classification: "Grade I listed building",
        image: "images/cathedrals/london.webp"
    },
    {
        name: "Reims Cathedral",
        location: "Reims, France",
        lat: 49.2539,
        lng: 4.0347,
        date: "1211 - 1275",
        architect: "Jean d'Orbais",
        style: "Gothic",
        classification: "UNESCO World Heritage Site",
        image: "images/cathedrals/reims.webp"
    },
    {
        name: "Barcelona Cathedral",
        location: "Barcelona, Spain",
        lat: 41.3839,
        lng: 2.1760,
        date: "1298 - 1420",
        architect: "Arnau Bargués",
        style: "Catalan Gothic",
        classification: "Bien de Interés Cultural",
        image: "images/cathedrals/barcelona.webp"
    },
    {
        name: "Seville Cathedral",
        location: "Seville, Spain",
        lat: 37.3861,
        lng: -5.9922,
        date: "1401 - 1528",
        architect: "Charles Galter, Alonso Martínez",
        style: "Gothic, Renaissance",
        classification: "UNESCO World Heritage Site",
        image: "images/cathedrals/seville.webp"
    },
    {
        name: "Cologne Cathedral",
        location: "Cologne, Germany",
        lat: 50.9413,
        lng: 6.9583,
        date: "1248 - 1880",
        architect: "Master Gerhard",
        style: "Gothic",
        classification: "UNESCO World Heritage Site",
        image: "images/cathedrals/cologne.webp"
    },
    {
        name: "St. Stephen's Cathedral",
        location: "Vienna, Austria",
        lat: 48.2082,
        lng: 16.3738,
        date: "1137 - 1511",
        architect: "Anton Pilgram",
        style: "Romanesque, Gothic",
        classification: "National Symbol of Austria",
        image: "images/cathedrals/vienna.webp"
    }
];

function displayIntroCathedralsContent() {
    const intro = document.getElementById("introCathedralsSection");
    if (!intro) return;

    intro.innerHTML = `
    <h1>${introCathedralsContent.title}</h1>
    <p>${introCathedralsContent.description}</p>
  `;
}

function displayCathedralsCards(data) {
    const container = document.getElementById("cathedrals-list");
    if (!container) return;
    container.innerHTML = ""; // Clear before adding

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        img.loading = "lazy";
        card.appendChild(img);

        const content = document.createElement("div");
        content.className = "card-content";

        const title = document.createElement("h2");
        title.textContent = item.name;
        content.appendChild(title);

        const locationP = document.createElement("p");
        locationP.innerHTML = `<strong>Location:</strong> 
            <a href="map.html?lat=${item.lat}&lng=${item.lng}" target="_blank">${item.location}</a>`;
        content.appendChild(locationP);

        const dateP = document.createElement("p");
        dateP.innerHTML = `<strong>Date:</strong> ${item.date}`;
        content.appendChild(dateP);

        const archP = document.createElement("p");
        archP.innerHTML = `<strong>Architect/Patron:</strong> ${item.architect}`;
        content.appendChild(archP);

        const styleP = document.createElement("p");
        styleP.innerHTML = `<strong>Style:</strong> ${item.style}`;
        content.appendChild(styleP);

        const classP = document.createElement("p");
        classP.innerHTML = `<strong>Classification:</strong> ${item.classification}`;
        content.appendChild(classP);

        const iconBar = document.createElement("div");
        iconBar.className = "icon-bar";

        const favIcon = document.createElement("img");
        favIcon.src = "icons/favorite.png";
        favIcon.alt = "Add to Favorites";
        favIcon.title = "Add to Favorites";
        favIcon.className = "icon-btn";
        favIcon.addEventListener("click", () => {
            addToFavorites(item.name, item.image, item.location);
        });

        const visitedIcon = document.createElement("img");
        visitedIcon.src = "icons/visited.png";
        visitedIcon.alt = "Mark as Visited";
        visitedIcon.title = "Mark as Visited";
        visitedIcon.className = "icon-btn";
        visitedIcon.addEventListener("click", () => {
            addToVisited(item.name, item.image, item.location);
        });

        const toVisitIcon = document.createElement("img");
        toVisitIcon.src = "icons/tovisit.png";
        toVisitIcon.alt = "Add to To Visit";
        toVisitIcon.title = "Add to To Visit";
        toVisitIcon.className = "icon-btn";
        toVisitIcon.addEventListener("click", () => {
            addToToVisit(item.name, item.image, item.location);
        });

        iconBar.appendChild(favIcon);
        iconBar.appendChild(visitedIcon);
        iconBar.appendChild(toVisitIcon);

        content.appendChild(iconBar);
        card.appendChild(content);
        container.appendChild(card);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    displayIntroCathedralsContent();
    displayCathedralsCards(cathedrals);

});
//============================= Cathedrals ====================================================

//============================= Theatres ======================================================
const introTheatresContent = {
    title: "Welcome to Historic European theatres Architecture",
    description: `European theatres are living testaments to the continent's deep-rooted passion for the performing arts.
     From grand opera houses to intimate playhouses, these architectural gems have hosted centuries of music, drama, 
     and dance. Designed to impress both visually and acoustically, theatres like La Scala in Milan or 
     the Opéra Garnier in Paris reflect the artistic ambitions of their eras. As cultural landmarks, 
     they not only showcase architectural beauty but also preserve the traditions and innovation of 
     European performance culture. This page offers a curated journey through some of the most iconic 
     and historically significant theatres in Europe.`
};

const theatres = [
    {
        name: "Teatro alla Scala",
        location: "Milan, Italy",
        lat: 45.4670,
        lng: 9.1898,
        date: "1778",
        architect: "Giuseppe Piermarini",
        style: "Neoclassical",
        classification: "Opera House",
        image: "images/theatres/milan.webp"
    },
    {
        name: "Royal Opera House",
        location: "London, England",
        lat: 51.5129,
        lng: -0.1222,
        date: "1858 (rebuilt)",
        architect: "Edward Middleton Barry",
        style: "Victorian",
        classification: "Opera House",
        image: "images/theatres/london.webp"
    },
    {
        name: "Opéra Garnier",
        location: "Paris, France",
        lat: 48.8719,
        lng: 2.3316,
        date: "1861 - 1875",
        architect: "Charles Garnier",
        style: "Beaux-Arts",
        classification: "Monument historique",
        image: "images/theatres/paris.webp"
    },
    {
        name: "Opéra de Monte-Carlo",
        location: "Monte-Carlo, Monaco",
        lat: 43.7396,
        lng: 7.4276,
        date: "1879",
        architect: "Charles Garnier",
        style: "Beaux-Arts",
        classification: "Cultural Icon",
        image: "images/theatres/monteCarlo.webp"
    },
    {
        name: "Nationaltheater Munich",
        location: "Munich, Germany",
        lat: 48.1391,
        lng: 11.5802,
        date: "1818 / rebuilt 1963",
        architect: "Karl von Fischer / Gerhard Graubner",
        style: "Neoclassical",
        classification: "Bavarian State Opera",
        image: "images/theatres/munich.webp"
    },
    {
        name: "Staatsoper Vienna",
        location: "Vienna, Austria",
        lat: 48.2028,
        lng: 16.3686,
        date: "1869",
        architect: "Sicardsburg & van der Nüll",
        style: "Neo-Renaissance",
        classification: "Vienna State Opera",
        image: "images/theatres/vienna.webp"
    },
    {
        name: "Magyar Állami Operaház",
        location: "Budapest, Hungary",
        lat: 47.5022,
        lng: 19.0582,
        date: "1884",
        architect: "Miklós Ybl",
        style: "Neo-Renaissance",
        classification: "Hungarian State Opera",
        image: "images/theatres/budapest.webp"
    },
    {
        name: "Gran Teatro La Fenice",
        location: "Venice, Italy",
        lat: 45.4336,
        lng: 12.3358,
        date: "1792 / rebuilt 2003",
        architect: "Gianantonio Selva",
        style: "Neoclassical",
        classification: "Historic Opera House",
        image: "images/theatres/venice.webp"
    }
];

function displayIntroTheatresContent() {
    const intro = document.getElementById("introTheatresSection");
    if (!intro) return;

    intro.innerHTML = `
    <h1>${introTheatresContent.title}</h1>
    <p>${introTheatresContent.description}</p>
  `;
}

function displayTheatresCards(data) {
    const container = document.getElementById("theatres-list");
    if (!container) return;
    container.innerHTML = ""; // Clear before adding

    data.forEach(item => {
        // Create the main card
        const card = document.createElement("div");
        card.className = "card";

        // Monument image
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        img.loading = "lazy";
        card.appendChild(img);

        // Card content container
        const content = document.createElement("div");
        content.className = "card-content";

        // Title
        const title = document.createElement("h2");
        title.textContent = item.name;
        content.appendChild(title);

        // Location
        const locationP = document.createElement("p");
        locationP.innerHTML = `<strong>Location:</strong> 
            <a href="map.html?lat=${item.lat}&lng=${item.lng}" target="_blank">${item.location}</a>`;
        content.appendChild(locationP);

        // Date
        const dateP = document.createElement("p");
        dateP.innerHTML = `<strong>Date:</strong> ${item.date}`;
        content.appendChild(dateP);

        // Architect
        const archP = document.createElement("p");
        archP.innerHTML = `<strong>Architect/Patron:</strong> ${item.architect}`;
        content.appendChild(archP);

        // Style
        const styleP = document.createElement("p");
        styleP.innerHTML = `<strong>Style:</strong> ${item.style}`;
        content.appendChild(styleP);

        // Classification
        const classP = document.createElement("p");
        classP.innerHTML = `<strong>Classification:</strong> ${item.classification}`;
        content.appendChild(classP);

        // Icon bar container
        const iconBar = document.createElement("div");
        iconBar.className = "icon-bar";

        // Favorite icon
        const favIcon = document.createElement("img");
        favIcon.src = "icons/favorite.png";
        favIcon.alt = "Add to Favorites";
        favIcon.title = "Add to Favorites";
        favIcon.className = "icon-btn";
        favIcon.addEventListener("click", () => {
            addToFavorites(item.name, item.image, item.location);
        });

        // Visited icon
        const visitedIcon = document.createElement("img");
        visitedIcon.src = "icons/visited.png";
        visitedIcon.alt = "Mark as Visited";
        visitedIcon.title = "Mark as Visited";
        visitedIcon.className = "icon-btn";
        visitedIcon.addEventListener("click", () => {
            addToVisited(item.name, item.image, item.location);
        });

        // To Visit icon
        const toVisitIcon = document.createElement("img");
        toVisitIcon.src = "icons/tovisit.png";
        toVisitIcon.alt = "Add to To Visit";
        toVisitIcon.title = "Add to To Visit";
        toVisitIcon.className = "icon-btn";
        toVisitIcon.addEventListener("click", () => {
            addToToVisit(item.name, item.image, item.location);
        });

        // Append icons to bar
        iconBar.appendChild(favIcon);
        iconBar.appendChild(visitedIcon);
        iconBar.appendChild(toVisitIcon);

        // Append icon bar to content
        content.appendChild(iconBar);

        // Append content to card
        card.appendChild(content);

        // Append card to container
        container.appendChild(card);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    displayIntroTheatresContent();
    displayTheatresCards(theatres);
});

//============================= Theatres ======================================================


//============================= Credits =======================================================
const introCreditsContent = {
    title: "Credits & References",
    description: `Below is a list of sources and references used for historical and 
    architectural information featured on this site.`
};

const credits = [
    {
        source: "15 Most Beautiful and Important Theatres in Europe - Official Ranking",
        url: "https://europeoftales.net/useful-info/15-most-beautiful-and-important-theatres-europe-official-ranking/"
    },
    {
        source: "Les 10 plus belles cathédrales d'Europe à visiter",
        url: "https://www.wonderbox.fr/blog/les-10-plus-belles-cathedrales-deurope-a-visiter/?srsltid=AfmBOooV5VsOyARdD6P17d3-gnhKeCpxSJ2y5-oXkMjKng32fzYsTq3K/"
    },
    {
        source: "Les plus beaux châteaux d'Europe",
        url: "https://www.nationalgeographic.fr/photography/2017/12/les-plus-beaux-chateaux-deurope"
    },
    {
        source: "Top 5 des châteaux incontournables en Europe",
        url: "https://www.campingdirect.com/fr/blog/top-5-des-chateaux-incontournables-en-europe"
    },
    {
        source: "UNESCO World Heritage Centre",
        url: "https://whc.unesco.org/"
    },
    {
        source: "Unsplash",
        url: "https://unsplash.com/"
    },
    {
        source: "Combien de ces 40 monuments anglais les plus célèbres avez-vous vus ?",
        url:"https://destinationangleterre.com/monuments-anglais-les-plus-celebres/"
    }
];

function displayIntroCreditsContent() {
    const intro = document.getElementById("introCreditsSection");
    if (!intro) return;

    intro.innerHTML = `
    <h1>${introCreditsContent.title}</h1>
    <p>${introCreditsContent.description}</p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
    displayIntroCreditsContent();
});

const list = document.getElementById("credit-list");
credits.forEach(item => {
    const card = document.createElement("div");
    card.className = "credit-card";
    card.innerHTML = `<a href="${item.url}" target="_blank">${item.source}</a>`;
    list.appendChild(card);
});
//============================= Credits =======================================================

//============================= Contact Answer ================================================
const contactAnswerContent = {
    title: "Thank You for Contacting Us!",
    description: `Your message has been successfully sent. We'll get back to you as soon as possible.`
};

function displayContactAnswerContent() {
    const intro = document.getElementById("contactAnswerSection");
    if (!intro) return;

    intro.innerHTML = `
    <h1>${contactAnswerContent.title}</h1>
    <p>${contactAnswerContent.description}</p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
    displayContactAnswerContent();
});
//============================= Contact Answer ================================================

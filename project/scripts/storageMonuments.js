const STORAGE_PREFIX = "euMonuments_";

function loadList(key) {
    return JSON.parse(localStorage.getItem(STORAGE_PREFIX + key)) || [];
}

function saveList(key, list) {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(list));
}

function displayList(key, containerId) {
    let list = loadList(key);
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    if (list.length === 0) {
        container.innerHTML = `<p>No monuments in this list yet.</p>`;
        return;
    }

    list.forEach(m => {
        const figure = document.createElement('figure');
        figure.className = 'monument-card';

        const img = document.createElement('img');
        img.src = m.image || "images/placeholder.webp"; // fallback if no image
        img.alt = m.name || "Unknown monument";

        const caption = document.createElement('figcaption');
        caption.innerHTML = `<strong>${m.name || "Unnamed"}</strong><br><small>${m.location || ""}</small>`;

        figure.appendChild(img);
        figure.appendChild(caption);
        container.appendChild(figure);
    });
}



function addToFavorites(monumentName, monumentImage, monumentLocation) {
    let favs = loadList('favorites');
    if (!favs.some(m => m.name === monumentName)) {
        favs.push({
            name: monumentName,
            image: monumentImage,
            location: monumentLocation
        });
        saveList('favorites', favs);
        alert(`${monumentName} added to favorites`);
    }
}

function addToVisited(monumentName, monumentImage, monumentLocation) {
    let visited = loadList('visited');
    if (!visited.some(m => m.name === monumentName)) {
        visited.push({
            name: monumentName,
            image: monumentImage,
            location: monumentLocation
        });
        saveList('visited', visited);
        alert(`${monumentName} marked as visited`);
    }
}

function addToToVisit(monumentName, monumentImage, monumentLocation) {
    let toVisit = loadList('toVisit');
    if (!toVisit.some(m => m.name === monumentName)) {
        toVisit.push({
            name: monumentName,
            image: monumentImage,
            location: monumentLocation
        });
        saveList('toVisit', toVisit);
        alert(`${monumentName} added to your to-visit list`);
    }
}



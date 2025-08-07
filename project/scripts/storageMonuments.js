// ---- storageMonuments.js (one source of truth) ----
const STORAGE_PREFIX = "euMonuments_";

function loadList(key) {
    return JSON.parse(localStorage.getItem(STORAGE_PREFIX + key)) || [];
}
function saveList(key, list) {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(list));
}

// add functions — all use the SAME keys!
function addToFavorites(name, image, location) {
    const list = loadList('favorites');
    if (!list.some(m => m.name === name)) {
        list.push({ name, image, location });
        saveList('favorites', list);
        alert(`${name} added to favorites`);
    }
}
function addToVisited(name, image, location) {
    const list = loadList('visited');
    if (!list.some(m => m.name === name)) {
        list.push({ name, image, location });
        saveList('visited', list);
        alert(`${name} marked as visited`);
    }
}
function addToToVisit(name, image, location) {
    const list = loadList('toVisit'); // NOTE camelCase exactly 'toVisit'
    if (!list.some(m => m.name === name)) {
        list.push({ name, image, location });
        saveList('toVisit', list);
        alert(`${name} added to your to-visit list`);
    }
}

// display helper (safe if page doesn't have a container)
function displayList(key, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; // don't crash on other pages
    const list = loadList(key);

    container.innerHTML = '';
    if (list.length === 0) {
        container.innerHTML = `<p>No monuments in this list yet.</p>`;
        return;
    }

    list.forEach(m => {
        const fig = document.createElement('figure');
        fig.className = 'monument-card';

        const img = document.createElement('img');
        img.src = m.image || 'images/placeholder.webp';
        img.alt = m.name || 'Monument';
        img.loading = 'lazy';

        const cap = document.createElement('figcaption');
        cap.innerHTML = `<strong>${m.name || 'Unnamed'}</strong><br><small>${m.location || ''}</small>`;

        fig.appendChild(img);
        fig.appendChild(cap);
        container.appendChild(fig);
    });
}

// only render the lists that exist on the current page
document.addEventListener('DOMContentLoaded', () => {
    displayList('favorites', 'favoritesContainer');
    displayList('visited', 'visitedContainer');
    displayList('toVisit', 'toVisitContainer');
});



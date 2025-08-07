// Read URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const latParam = parseFloat(getQueryParam('lat'));
const lngParam = parseFloat(getQueryParam('lng'));

let mapCenter = [54.526, 15.2551]; // Default: Europe center
let zoomLevel = 4;

if (!isNaN(latParam) && !isNaN(lngParam)) {
    mapCenter = [latParam, lngParam];
    zoomLevel = 12; // Zoom closer to the selected monument
}

// Create the map
const map = L.map('map').setView(mapCenter, zoomLevel);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Custom icons
const icons = {
    cathedral: L.icon({
        iconUrl: 'icons/cathedral.png',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -28]
    }),
    castle: L.icon({
        iconUrl: 'icons/castle.png',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -28]
    }),
    theatre: L.icon({
        iconUrl: 'icons/theatre.png',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -28]
    })
};

// Create the cluster group
const markers = L.markerClusterGroup();

// Add markers for each monument
monuments.forEach(m => {
    const marker = L.marker([m.lat, m.lng], { icon: icons[m.type] })
        .bindPopup(`
      <div class="popup-card">
        <img src="${m.image}" alt="${m.name}" loading = "lazy">
        <h3>${m.name}</h3>
        <p><strong>Location:</strong> ${m.location}</p>
        <p>${m.description}</p>
      </div>
    `);

    markers.addLayer(marker);

    // If map opened with specific lat/lng, open that popup
    if (!isNaN(latParam) && !isNaN(lngParam) && m.lat === latParam && m.lng === lngParam) {
        marker.openPopup();
    }
});

// Add the cluster group to the map
map.addLayer(markers);

const apiKey = 'cb0500a589a69d3ab4f2841012bdeebe';
const mapboxToken = 'pk.eyJ1IjoiZ2hhemlhc2thcmkiLCJhIjoiY204NzkyejUyMGFidjJrc2ZhNDAwN2IwayJ9.7ogZ4sQqTa8ghnHCf6lVgg';
const map = L.map('map').setView([43.3072298212761, -2.9743977904825], 11);

// Define tile layers
const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
});


const satelliteLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=' + mapboxToken, {
    maxZoom: 19,
    attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
});

// Add street layer to map by default
streetLayer.addTo(map);

// Add layer control
L.control.layers({
    "Street": streetLayer,
    "Topographic": topoLayer,
    "Satellite": satelliteLayer
}).addTo(map);

function getWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const { coord, main, wind, weather } = data;
            const marker = L.marker([coord.lat, coord.lon]).addTo(map);
            marker.bindPopup(`
                <b>${city}</b><br>
                Temperature: ${main.temp} °C<br>
                Wind Speed: ${wind.speed} m/s<br>
                Conditions: ${weather[0].description}
            `).openPopup();
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

document.getElementById('search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const city = e.target.value;
        getWeatherData(city);
    }
});

// Example: Fetch weather data for a few cities in Bizkaia
['Bilbao', 'Muskiz', 'Barakaldo'].forEach(city => getWeatherData(city));

// Debugging: Log any errors when loading tiles
topoLayer.on('tileerror', function(e) {
    console.error('Error loading tile:', e);
});
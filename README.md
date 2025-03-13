# Weather Map Application

A web-based application that displays weather information for different locations in Bizkaia using OpenWeatherMap API and Leaflet.js for mapping.

## Features

- Interactive map display with multiple layer options:
  - Street Map (OpenStreetMap)
  - Topographic Map (OpenTopoMap)
  - Satellite Imagery (Mapbox)
- Real-time weather information display:
  - Temperature in Celsius
  - Wind speed in meters per second
  - Current weather conditions
- City search functionality
- Automatic weather data display for major cities in Bizkaia

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Leaflet.js (Mapping library)
- OpenWeatherMap API
- Mapbox API (for satellite imagery)

## Setup

1. Clone the repository
2. Replace the API keys in `app.js`:
   - OpenWeatherMap API key
   - Mapbox API key (for satellite imagery)
3. Open `index.html` in a web browser

## API Keys Required

- OpenWeatherMap API key: Get it from [OpenWeatherMap](https://openweathermap.org/api)
- Mapbox API key: Get it from [Mapbox](https://www.mapbox.com/)

## Usage

1. The map will load centered on Bizkaia
2. Weather information is automatically displayed for:
   - Bilbao
   - Muskiz
   - Barakaldo
3. To search for other cities:
   - Enter the city name in the search box
   - Press Enter
4. Click on markers to view weather information
5. Use the layer control to switch between different map views

## Map Controls

- Zoom in/out using the mouse wheel or the zoom controls
- Pan the map by dragging
- Toggle between different map layers using the layer control
- Click on markers to view weather information

## Weather Information Displayed

- City name
- Current temperature (°C)
- Wind speed (m/s)
- Current weather conditions

## Browser Support

The application works on all modern web browsers:
- Chrome
- Firefox
- Safari
- Edge

## Dependencies

- Leaflet.js
- OpenWeatherMap API
- Mapbox API

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- OpenWeatherMap for weather data
- OpenStreetMap for map data
- Mapbox for satellite imagery
- Leaflet.js for the mapping library

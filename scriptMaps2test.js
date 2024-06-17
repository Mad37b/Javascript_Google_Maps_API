function initMap() {
    const mapOptions = {
        mapTypeId: 'roadmap'
    };

    // Mostrar un mapa en la página web
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const bounds = new google.maps.LatLngBounds();

    // Múltiples ubicaciones de marcadores, latitud y longitud
    const markers = [
        ['Brooklyn Museum, NY', 40.671531, -73.963588],
        ['Brooklyn Public Library, NY', 40.672587, -73.968146],
        ['Prospect Park Zoo, NY', 40.665588, -73.965336]
    ];

    // Contenido de la ventana de información
    const infoWindowContent = [
        ['<div class="info_content">' +
            '<h3>Brooklyn Museum</h3>' + '<img src="perro.png" alt="Image" style="width:200px;height:150px;">' +
            '<p>The Brooklyn Museum is an art museum located in the New York City borough of Brooklyn.</p>' + '</div>'],
        ['<div class="info_content">' +
            '<h3>Brooklyn Public Library</h3>' +
            '<p>The Brooklyn Public Library (BPL) is the public library system of the borough of Brooklyn, in New York City.</p>' +
            '</div>'],
        ['<div class="info_content">' +
            '<h3>Prospect Park Zoo</h3>' +
            '<p>The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
            '</div>']
    ];

    // Añadir múltiples marcadores al mapa
    const infoWindow = new google.maps.InfoWindow();

    // Escalar el marcador una vez como una propiedad estática
    const pinScaled = new google.maps.marker.PinElement({
        scale: 1.5,
    });

    for (let i = 0; i < markers.length; i++) {
        const position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);

        const marker = new google.maps.marker.AdvancedMarkerElement({
            position,
            map: map,
            title: markers[i][0],
            icon: {
                url: "perro.png",
                size: new google.maps.Size(20, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 32)
            },
            content: pinScaled.element,
        });

        // Añadir ventana de información al marcador
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));
    }

    // Centrar el mapa para que quepan todos los marcadores en la pantalla
    map.fitBounds(bounds);

    // Ajustar nivel de zoom
    const boundsListener = google.maps.event.addListener(map, 'bounds_changed', function () {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });

    // Cargar función de inicialización
    google.maps.event.addDomListener(window, 'load', initMap);
}

// HTML
// Asegúrate de que tienes un div con id "map" en tu HTML
// <div id="map" style="height: 500px; width: 100%;"></div>

// Importar la biblioteca de Google Maps con la clave de API
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=marker"></script>

async function  initMap() {
    let map;
    const bounds = new google.maps.LatLngBounds();
    const mapOptions = {
        mapTypeId: 'roadmap'
    };

    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(50);
 
    const markers = [
        ['Brooklyn Museum, NY', 40.671531, -73.963588],
        ['Brooklyn Public Library, NY', 40.672587, -73.968146],
        ['Prospect Park Zoo, NY', 40.665588, -73.965336]
    ];

    // Info window content
    const infoWindowContent = [
        ['<div class="info_content">' +
            '<h3>Brooklyn Museum</h3>' + '<img src="perro.png" alt="Image" style="width:200px;height:150px;>"</img>"' +
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

    // Add multiple markers to map
    //const infoWindow = new google.maps.InfoWindow();
    /**const AdvancedMarkerElement="";
    const PinElement=""
     AdvancedMarkerElement,PinElement = await google.maps.importLibrary("marker");**/
    let i;
   
    //Scale
  
        const infowindow = new google.maps.InfoWindow({
            content: '<div><img src="perro.png" alt="Image" style="width:200px;height:150px;"><br><strong> Marker Title</strong><br>Marker Description</div>',
        });
    // Place each marker on the map  
      for (i = 0; i < markers.length; i++) {
        
         const position = new google.maps.LatLng(markers[i][1], markers[i][2]);
         bounds.extend(position);
         

        let marker =  new google.maps.Marker({
             position,
             map: map,
             title: markers[i][0],
             icon: {
                url: "perro.png", // url
                scaledSize: new google.maps.Size(50, 50), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            },         
         });

         // Scale the marker one time as a static property
        




    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infoWindow.setContent(infoWindowContent[i][0]);
            infoWindow.open(map, marker);
        }
    })(marker, i));

    // Center the map to fit all markers on the screen
    map.fitBounds(bounds);
}



// Set zoom level
const boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
    this.setZoom(14);
    google.maps.event.removeListener(boundsListener);
});
}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);

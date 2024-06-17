
// MI CLAVE API GOOGLE
//AIzaSyB6jd4lpYU_oSVz08SJcgJqjVdKDB5EmMA


let map;


/** iniciar mapa **/
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  /** Crear mapa por id */

  map = new Map(document.getElementById("map"), {
    center: { lat: 36.297, lng: 29.644 },
    zoom: 5,
    mapID: "i4504f8b37365c3d0",
  });

  /** Marcador  */




  const marker = new AdvancedMarkerElement({
    map,
    position: { lat: 37.4239163, lng: -122.0947209 },
  });
}

initMap();

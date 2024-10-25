// Funktion för att initiera kartan
function initMap() {
  // Definiera koordinater för platsen (t.ex. Stockholm)
  var location = { lat: 59.3293, lng: 18.0686 };

  // Skapa kartan och centrera den på platsen
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10, // Zoomnivå
    center: location, // Centrera kartan
  });

  // Lägg till en marker (knappnål) på platsen
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Stockholm', // Text som visas vid hovring
  });
}

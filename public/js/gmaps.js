// Initialize and add the map
let map;

async function initMap() {
  // The location of sbm
  const position = { lat: 40.37993234781047, lng: 18.127510211573668 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "e7c0e064b4fe1211",
  });

  const beachFlagImg = document.createElement("img");
  beachFlagImg.src = "/images/marker.png";

  // The marker, positioned at sbm
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    content: beachFlagImg,
    title: "SBM srl",
  });
}

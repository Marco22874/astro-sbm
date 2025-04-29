// public/js/gmaps.js

// Initialize and add the map
let map; // Puoi mantenere questa variabile globale se ti serve accedere alla mappa da altre parti

async function initMap() {
  // The location of sbm
  const position = { lat: 40.37993234781047, lng: 18.127510211573668 };

  // --- PUNTO DELL'ERRORE ---
  // Qui 'google' deve essere definito. L'API deve essere già caricata.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  // -------------------------

  // The map, centered at sbm
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "e7c0e064b4fe1211", // Assicurati che questo Map ID sia valido per la tua chiave API
  });

  // Crea l'elemento immagine per il marker
  const beachFlagImg = document.createElement("img");
  // Assicurati che il percorso sia corretto rispetto alla cartella 'public'
  // Se l'immagine è in 'public/img/marker.png', il percorso è corretto.
  beachFlagImg.src = "/images/marker.png";
  // Applica eventuali stili se necessario (es. dimensioni)
  // beachFlagImg.style.width = '30px';
  // beachFlagImg.style.height = '40px';

  // The marker, positioned at sbm
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    content: beachFlagImg, // Usa l'elemento immagine come contenuto
    title: "SBM srl",
  });
}

// !! RIMUOVI QUESTA RIGA DAL TUO FILE !!
// initMap();

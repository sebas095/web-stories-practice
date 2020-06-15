import styles from "./maps/styles";

function initMap() {
  const coords = {
    lat: 19.427025,
    lng: -99.167665,
  };

  const map = new google.maps.Map(document.getElementById("mapa"), {
    center: coords,
    zoom: 17,
    styles,
  });

  const marker = new google.maps.Marker({
    position: coords,
    map,
    title: "Facilito Store",
  });
}

initMap();

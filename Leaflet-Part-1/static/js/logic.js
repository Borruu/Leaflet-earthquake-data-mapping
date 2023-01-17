let url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(url).then(function (data) {
  console.log(data.features);
  // mapFeatures(data.features);
});

// function getGeometry(data) {}
// get coordinates - lat, long, depth - from data. geometry[coordinates][0],[1],[2]
// get magnitude from properties.mag

// Create function to determine marker colour by earthquake depth
function setColour(input) {}

// Create function to determine marker size by earthquake magnitude
function setRadius(input) {
  return input * 50000;
}

// Create empty array to store earthquake markers
let eqMarkers = [];

// Loop through data, create earthquake markers and add them to eqMarkers array

// ______________________________________________________________________________________
d3.json(url).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});

function createFeatures(earthquakeData) {
  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  function onEachFeature(feature, layer) {
    eqMarkers.push(
      L.circle(
        [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
        {
          stroke: false,
          fillOpacity: 0.75,
          color: "purple",
          fillColor: "purple",
          // size by earthquake magnitude
          radius: setRadius(feature.properties.mag),
        }
      )
    );
    layer.bindPopup(
      `<h3>${feature.properties.place}</h3><hr><p>${new Date(
        feature.properties.time
      )}</p>`
    );
  }

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  let earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature,
  });

  // Send our earthquakes layer to the createMap function/
  createMap(earthquakes);
}

function createMap(earthquakes) {
  // ______________________________________________________________________________________
  // Create the base layers.
  let street = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );

  let topo = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  });

  // Create layer group for earthquake markers.
  // let earthquakeLayer = L.layerGroup(eqMarkers)

  // Create a baseMaps object to contain the streetmap and the topographical map.
  let baseMaps = {
    Street: street,
    Topography: topo,
  };

  let overlayMaps = {
    Earthquakes: earthquakes,
  };
  let eqLayer = L.layerGroup(eqMarkers);
  // Create initial blank map
  let myMap = L.map("map", {
    center: [0, 0],
    zoom: 2,
    layers: [street, earthquakes, eqLayer],
  });

  // Create a layer control that contains our baseMaps and overlayMaps, and add them to the map.
  L.control
    .layers(baseMaps, overlayMaps, {
      collapsed: false,
    })
    .addTo(myMap);
}

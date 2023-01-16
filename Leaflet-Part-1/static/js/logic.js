let url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(url).then(function (data) {
  console.log(data.features);
});

// function getGeometry(data) {}
// get coordinates - lat, long, depth - from data. geometry[coordinates][0],[1],[2]
// get magnitude from properties.mag

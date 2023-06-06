# Visualising Earthquake Data with Leaflet
## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualise their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it.

### Overview
This Project aims to develop a way to visualise USGS data.

The USGS provides earthquake data in a number of different formats, updated every minute.

Source: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php.

### Repository 
The files contained in folder **Leaflet-Part-1** map all earthquakes that have occurred in the the past 7 days. 
* The size of each marker is indicative of the earthquake's magnitude (50,000 metres * magnitude).
* The depth of each earthquake is indicated by colour, as per the legend provided. 

The files contained in folder **Leaflet-Part-2** will map tectonic plates, overlaid with earthquake data to illustrate the relationship between tectonic plates and seismic activity.

![image](https://github.com/Borruu/leaflet-challenge/assets/112932520/64ec3c95-52bf-4eda-bebf-eb0917113e82)


### References
Dataset created by the United States Geological Survey: http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

Tectonic plate data: https://github.com/fraxen/tectonicplates
